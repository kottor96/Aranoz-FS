<?php

namespace App\Http\Controllers;

use App\Models\Panier;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index(){
        return Inertia::render('Panier/Index');
    }
    public function checkout(){
        return Inertia::render('checkout/Index');
    }
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'nullable|integer|min:0' 
        ]);

        $cart = Panier::firstOrCreate(
            [
                'user_id' => auth()->id(),
                'product_id' => $request->product_id,
            ],
            ['quantity' => 0]
        );

        if (isset($request->quantity)) {
            if ($request->quantity == 0) {
                // Supprimer si quantity = 0
                $cart->delete();
            } else {
                // Remplacer la quantité
                $cart->update(['quantity' => $request->quantity]);
            }
        } else {
            // Sinon on incrémente de 1
            $cart->increment('quantity', 1);
        }

        return redirect()->back()->with('success', 'Panier mis à jour.');
    }

}
