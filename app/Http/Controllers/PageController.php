<?php

namespace App\Http\Controllers;

use App\Models\Image_product;
use App\Models\Product;
use App\Models\Product_categorie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home(){
        $products = Product::with(Image_product::class)->get();
        return Inertia::render('Index',compact('products'));
    }
}
