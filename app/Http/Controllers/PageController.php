<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Product_categorie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home(){
        $products = Product::with('images')->get();
        $categories = Product_categorie::with('products','products.images')->get(); 
        return Inertia::render('Index',compact('products','categories'));
    }
}
