<?php

namespace App\Http\Controllers;

use App\Models\Billing_detail;
use App\Models\Order;
use App\Models\Order_item;
use App\Models\Panier;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index2($numero = null)
    {
        // Si aucun numéro n'est fourni, ne renvoie aucune commande
        $orders = [];

        if ($numero) {
            $orders = Order::where('order_number', $numero)
              ->with('orderItems')
              ->first();
        }

        return Inertia::render('shop/TrackOrder', compact('orders','numeroRecherche'??''));
    }

    public function index(){
        $orders = Order::with('orderItems','user')->get();
        return Inertia::render('Admin/Order/Index',compact('orders'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'billing.firstname' => 'required|string|max:255',
            'billing.lastname'  => 'required|string|max:255',
            'billing.email'     => 'required|email|max:255',
            'billing.phone'     => 'required|string|max:50',
            'billing.address'   => 'required|string|max:255',
            'billing.city'      => 'required|string|max:255',
            'billing.postcode'  => 'required|string|max:20',
            'billing.country'   => 'required|string|max:100',
            'paymentMethod'     => 'required|string|in:paypal,check',
        ]);

        $user = $request->user();

        $cartItems = Panier::with('product')->where('user_id', $user->id)->get();

        if ($cartItems->isEmpty()) {
            return back()->withErrors(['cart' => 'Ton panier est vide.']);
        }

        DB::transaction(function () use ($request, $user, $cartItems) {

            $billing = Billing_detail::create([
                'first_name'   => $request->billing['firstname'],
                'last_name'    => $request->billing['lastname'],
                'company'      => $request->billing['company'] ?? null,
                'phone_number' => $request->billing['phone'],
                'email'        => $request->billing['email'],
                'address'      => $request->billing['address'],
                'city'         => $request->billing['city'],
                'zip'          => $request->billing['postcode'],
                'country'      => $request->billing['country'],
            ]);

            $order = Order::create([
                'user_id'        => $user->id,
                'billing_detail_id' => $billing->id,
                'payment_method' => $request->paymentMethod,
                'total_price'    => $cartItems->sum(function($item) {
                    return ($item->product->discountPrice ?? $item->product->price) * $item->quantity;
                }),
            ]);

            foreach ($cartItems as $item) {
                Order_item::create([
                    'order_id'      => $order->id,
                    'product_id'    => $item->product->id,
                    'product_name'  => $item->product->name,
                    'unit_price'    => $item->product->discountPrice ?? $item->product->price,
                    'quantity'      => $item->quantity,
                    'total_price'   => ($item->product->discountPrice ?? $item->product->price) * $item->quantity,
                    'image_main'    => $item->product->image_main ?? null,
                    'image_rear'    => $item->product->image_rear ?? null,
                    'image_left_side' => $item->product->image_left_side ?? null,
                    'image_right_side'=> $item->product->image_right_side ?? null,
                    'color'         => $item->product->color ?? null,
                    'description'   => $item->product->description ?? null,
                    'promo_id'      => $item->product->promo_id ?? null,
                ]);
            }

            Panier::where('user_id', $user->id)->delete();
        });

        return redirect()->route('checkout.success')->with('success', 'Commande passée avec succès !');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $order = Order::with(['orderItems','user'])->findOrFail($id);
        return Inertia::render('Admin/Order/Show',compact('order'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        Order::findOrFail($id)->update([
            'status' => $request->status,
        ]);

        return back();
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
