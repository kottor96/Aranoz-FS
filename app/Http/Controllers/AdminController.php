<?php

namespace App\Http\Controllers;

use App\Models\Blog_categorie;
use App\Models\Product_categorie;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function product(){
        $prodCat = Product_categorie::all();
        $blogCat = Blog_categorie::all();
        $tagCat = Tag::all();
        return Inertia::render('Admin/Categorie/Index',compact('prodCat','blogCat','tagCat'));
    }
    public function dashboard(){
        return Inertia::render('Admin/Dashboard');
    }

}
