<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Product_categorie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home(){
        $product = Product::with(Product_categorie::class)->get();
        return Inertia::render('Index',compact($product));
    }
}
