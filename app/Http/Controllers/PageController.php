<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Blog_categorie;
use App\Models\Categorie;
use App\Models\Product;
use App\Models\Product_categorie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home(){
        $products = Product::with('images')->get();
        $categories = Product_categorie::with('products','products.images')->get(); 

        $maxHours = 300;
        $maxSeconds = $maxHours * 3600;

        $startTimestamp = strtotime('2025-09-29 00:00:00');
        $updateInterval = 1000;

        return Inertia::render('Index',compact('products','categories','maxSeconds',"startTimestamp",'updateInterval'));
    }
    public function blog(){
        $blogs = Blog::with('blog_categorie','image')->get();
        $filters = Blog_categorie::all();
        return Inertia::render('blog/Blog',compact("blogs",'filters'));
    }
    public function shop(){
        $products = Product::with('images','category')->get();
        $categories = Product_categorie::all();
        return Inertia::render('shop/Shop',compact('products','categories'));
    }
}
