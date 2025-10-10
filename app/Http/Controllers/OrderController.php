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
        $user = auth()->user();
        $panierItems = $user->paniers()->withPivot('quantity')->get();

        if ($panierItems->isEmpty()) {
            return redirect()->back()->with('error', 'Ton panier est vide.');
        }

        DB::transaction(function() use ($user, $panierItems, $request) {
            // Créer la commande
            $order = Order::create([
                'user_id' => $user->id,
                'total_price' => $panierItems->sum(fn($item) => ($item->discountPrice ?? $item->price) * $item->pivot->quantity),
                'payment_method' => $request->payment_method ?? 'paypal',
            ]);

            // Créer les order_items
            foreach ($panierItems as $item) {
                Order_item::create([
                    'order_id' => $order->id,
                    'product_id' => $item->id,
                    'product_name' => $item->name,
                    'unit_price' => $item->discountPrice ?? $item->price,
                    'quantity' => $item->pivot->quantity,
                    'total_price' => ($item->discountPrice ?? $item->price) * $item->pivot->quantity,
                    'image_main' => $item->image_main ?? null,
                    'color' => $item->color ?? null,
                    'description' => $item->description ?? null,
                ]);
            }

            // Enregistrer les billing details
            Billing_detail::create([
                'first_name' => $request->firstname,
                'last_name' => $request->lastname,
                'company' => $request->company,
                'phone_number' => $request->phone,
                'email' => $request->email,
                'adress' => $request->address,
                'city' => $request->city,
                'zip' => $request->postcode,
                'country_id' => $request->country,
            ]);

            Panier::where('user_id', auth()->id())->delete();
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
