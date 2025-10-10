<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Product;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function toggle(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        $favorite = Like::where('user_id', auth()->id())
                        ->where('product_id', $request->product_id)
                        ->first();

        if ($favorite) {
            $favorite->delete();
        } else {
            Like::create([
                'user_id' => auth()->id(),
                'product_id' => $request->product_id,
            ]);
        }
        // $product = Product::with('category')->findOrFail($request->product_id);
        return back();
    }
}
