<?php

namespace App\Http\Controllers;

use App\Models\Image_product;
use App\Models\Product;
use App\Models\Product_categorie;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index2($cat=[])
    {
        $products = Product::with('likes','images','category')->withCount('likes')->get();
        $categories = Product_categorie::all();
        return Inertia::render('shop/Shop',compact('products','categories','cat'));
    }
    public function like(){
        $products = Product::with('category','images')->withCount('likes')->get();
        return Inertia::render('Admin/Product/Liked',compact('products'));
    }
    public function index()
    {
        $products = Product::with('category','images')->get();
        return Inertia::render('Admin/Product/Index',compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Product_categorie::all();
        return Inertia::render('Admin/Product/Create',compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Création du produit
        $product = Product::create($request->only([
            'name','color','description','price','stock','category_id','promo'
        ]));

        // Gestion des images
        if ($request->has('images')) {
            foreach ($request->images as $index => $img) {
                $type = $img['type'] ?? null;
                $format = $img['format'] ?? null;
                $path = null;

                if (!$type || !$format) continue;

                if ($format === 'file' && isset($img['image'])) {
                    $file = $img['image'];
                    $filename = Str::slug($product->name) . "_{$type}_" . time() . '.' . $file->getClientOriginalExtension();
                    $path = $file->storeAs('product', $filename, 'public');
                    $pathF = "/storage/{$path}";
                } elseif ($format === 'url' && !empty($img['image'])) {
                    $pathF = $img['image'];
                }

                if (!$pathF) continue;

                Image_product::create([
                    'product_id' => $product->id,
                    'type' => $type,
                    'image' => $pathF,
                ]);
            }
        }
        return redirect()->route('admin.product.index')
                     ->with('success', 'Product created successfully.');
    }



    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::with('images','specification','comments','category')->findOrFail($id);
        return Inertia::render('shop/Show',compact('product'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $product = Product::with('category','images')->findOrFail($id);
        $categories = Product_categorie::all();
        return Inertia::render('Admin/Product/Edit',compact('product','categories'));
    }

    /**
     * Update the specified resource in storage.
     */
   public function update(Request $request, $id)
    {
        // Récupération du produit
        $product = Product::findOrFail($id);

        // Mise à jour des infos du produit
        $product->update($request->only([
            'name','color','description','price','stock','category_id','promo'
        ]));

        // Gestion des images
        if ($request->has('images')) {
            foreach ($request->images as $index => $img) {
                $type = $img['type'] ?? null;
                $format = $img['format'] ?? null;
                $pathF = null;

                if (!$type || !$format) continue;

                if ($format === 'file' && isset($img['image'])) {
                    $file = $img['image'];
                    $filename = Str::slug($product->name) . "_{$type}_" . time() . '.' . $file->getClientOriginalExtension();
                    $storedPath = $file->storeAs('product', $filename, 'public');
                    $pathF = "/storage/{$storedPath}";
                } elseif ($format === 'url' && !empty($img['image'])) {
                    $pathF = $img['image'];
                }

                if (!$pathF) continue;

                // Mise à jour si l'image de ce type existe déjà
                $existing = Image_product::where('product_id', $product->id)
                                        ->where('type', $type)
                                        ->first();
                if ($existing) {
                    $existing->update(['image' => $pathF]);
                } else {
                    Image_product::create([
                        'product_id' => $product->id,
                        'type' => $type,
                        'image' => $pathF,
                    ]);
                }
            }
        }

        return redirect()->route('admin.product.index')
                        ->with('success', 'Product updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Product::findOrFail($id)->delete();
        return back();
    }
}
