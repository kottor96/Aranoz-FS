<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Blog_categorie;
use App\Models\Blog_tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::with('image','blog_categorie','user','user.role')->get();
        return Inertia::render('Admin/Blog/Index',compact('blogs'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
    public function show(Blog $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $blogTag = Blog_tag::all();
        $blogCat = Blog_categorie::all();
        $blog = Blog::with('user','blog_categorie','tags','image')->findOrFail($id);
        return Inertia::render('Admin/Blog/Edit',compact('blog','blogCat','blogTag'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Blog::findOrFail($id)->delete();
        return back();
    }
}
