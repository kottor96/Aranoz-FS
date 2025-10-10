<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function index()
    {
        $favorites = Like::with('product')
            ->where('user_id', auth()->id())
            ->get();

        return inertia('Favorite/Index', [
            'favorites' => $favorites
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        $favorite = Like::firstOrCreate([
            'user_id' => auth()->id(),
            'product_id' => $request->product_id,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Produit ajouté aux favoris.',
            'favorite' => $favorite
        ]);
    }

    public function destroy($id)
    {
        $favorite = Like::where('user_id', auth()->id())->findOrFail($id);
        $favorite->delete();

        return response()->json([
            'success' => true,
            'message' => 'Produit retiré des favoris.'
        ]);
    }

    public function toggle(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id'
        ]);

        $favorite = Like::where('user_id', auth()->id())
            ->where('product_id', $request->product_id)
            ->first();

        if ($favorite) {
            $favorite->delete();
            $message = 'Produit retiré des favoris.';
            $liked = false;
        } else {
            Like::create([
                'user_id' => auth()->id(),
                'product_id' => $request->product_id,
            ]);
            $message = 'Produit ajouté aux favoris.';
            $liked = true;
        }

        return response()->json([
            'success' => true,
            'message' => $message,
            'liked' => $liked,
        ]);
    }
}
