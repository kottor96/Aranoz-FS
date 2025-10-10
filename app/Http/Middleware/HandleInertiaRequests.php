<?php

namespace App\Http\Middleware;

use App\Models\Panier;
use App\Models\Product_categorie;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'role' => $request->user()?->role,
                'avatar' => $request->user()?->avatar,
                'favorite' =>   $request->user()?->likes,
                'panier' => $request->user()?->paniers()->with('images')->get()->map(function ($product) {
                    return [
                        'id' => $product->id,
                        'quantity' => $product->pivot->quantity ?? 1,
                        'product' => [
                            'id' => $product->id,
                            'name' => $product->name,
                            'price' => $product->price,
                            'discountPrice' => $product->discountPrice,
                            'images' => $product->images->map(fn($img) => ['image' => $img->image])->toArray(),
                        ]
                    ];
                }),
        
            ],
            'category' => Product_categorie::all(),
        ];
    }
}
