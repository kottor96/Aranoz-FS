<?php

namespace App\Http\Controllers;

use App\Models\Panier;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $carts = Panier::with('product')
            ->where('user_id', auth()->id())
            ->get();

        return inertia('Cart/Index', [
            'carts' => $carts
        ]);
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
            'product_id' => 'required|exists:products,id',
            'quantity' => 'nullable|integer|min:1'
        ]);

        $cart = Panier::firstOrCreate(
            [
                'user_id' => auth()->id(),
                'product_id' => $request->product_id,
            ],
            ['quantity' => 0]
        );

        $cart->increment('quantity', $request->quantity ?? 1);

        return response()->json([
            'success' => true,
            'message' => 'Produit ajouté au panier.',
            'cart' => $cart
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Panier $panier)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Panier $panier)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'quantity' => 'required|integer|min:1'
        ]);

        $cart = Panier::where('user_id', auth()->id())->findOrFail($id);
        $cart->update(['quantity' => $request->quantity]);

        return response()->json([
            'success' => true,
            'message' => 'Quantité mise à jour.',
            'cart' => $cart
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $cart = Panier::where('user_id', auth()->id())->findOrFail($id);
        $cart->delete();

        return response()->json([
            'success' => true,
            'message' => 'Produit retiré du panier.'
        ]);
    }
    public function clear()
    {
        Panier::where('user_id', auth()->id())->delete();

        return response()->json([
            'success' => true,
            'message' => 'Panier vidé.'
        ]);
    }
}
