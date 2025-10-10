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

        $types = ['image_main','image_rear','image_left_side','image_right_side'];

        foreach ($types as $i => $type) {
            $fileKey = "image_files.$i";
            $urlKey  = "image_urls.$i";

            $imageData = ['product_id' => $product->id, 'type' => $type];

            // Priorité au fichier
            if ($request->hasFile($fileKey) && $request->file($fileKey)) {
                $file = $request->file($fileKey);
                $filename = Str::slug($product->name) . "_{$type}_" . time() . '.' . $file->getClientOriginalExtension();
                $imageData['image'] = $file->storeAs('product', $filename, 'public');
            } elseif (!empty($request->input($urlKey))) {
                $imageData['image'] = $request->input($urlKey);
            } else {
                continue; 
            }

            Image_product::create($imageData);
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
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'price' => 'required|numeric|min:0',
        //     'stock' => 'required|integer|min:0',
        //     'color' => 'nullable|string|max:50',
        //     'description' => 'nullable|string',
        //     'category_id' => 'nullable|exists:product_categories,id',
        //     'promo' => 'nullable|numeric|min:0',
        //     'image_files.*' => 'nullable|file|image|max:5120',
        //     'image_urls.*' => 'nullable|url',
        //     'image_types.*' => 'required|string', // main, rear, left, right
        // ]);

        // Update du produit
        $product = Product::findOrFail($id);
        $product->update($request->only([
            'name','color','description','price','stock','category_id','promo'
        ]));

        // Gestion des images
        if ($request->has('image_files') || $request->has('image_urls')) {
            $files = $request->file('image_files', []);
            $urls = $request->input('image_urls', []);
            $types = $request->input('image_types', []);

            foreach ($types as $i => $type) {
                $imageData = ['product_id' => $product->id, 'type' => $type];

                if (isset($files[$i]) && $files[$i]) {
                    $imageData['image'] = $files[$i]->store('product', 'public');
                } elseif (isset($urls[$i]) && $urls[$i]) {
                    $imageData['image'] = $urls[$i];
                } else {
                    continue;
                }

                // Mise à jour si existe déjà pour ce type, sinon création
                $existing = Image_product::where('product_id', $product->id)
                                        ->where('type', $type)
                                        ->first();
                if ($existing) {
                    $existing->update($imageData);
                } else {
                    Image_product::create($imageData);
                }
            }
        }

        return redirect()->route('admin.product.index')->with('success', 'Product updated successfully.');
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
