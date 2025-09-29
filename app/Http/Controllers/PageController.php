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

        $maxHours = 300;
        $maxSeconds = $maxHours * 3600;

        $startTimestamp = strtotime('2025-09-29 00:00:00');
        $updateInterval = 1000;

        return Inertia::render('Index',compact('products','categories','maxSeconds',"startTimestamp",'updateInterval'));
    }
}
