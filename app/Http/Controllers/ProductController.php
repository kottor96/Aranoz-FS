<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Product_categorie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index2($cat=[])
    {
        $products = Product::with('images','category')->withCount('likes')->get();
        $categories = Product_categorie::all();
        return Inertia::render('shop/Shop',compact('products','categories','cat'));
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
        //
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
    public function update(Request $request, Product $product)
    {
        //
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
