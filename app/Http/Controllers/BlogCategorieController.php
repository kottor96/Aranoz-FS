<?php

namespace App\Http\Controllers;

use App\Models\Blog_categorie;
use Illuminate\Http\Request;

class BlogCategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        Blog_categorie::create([
            'name'=>request('name'),
        ]);
        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog_categorie $blog_categorie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog_categorie $blog_categorie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog_categorie $blog_categorie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Blog_categorie::findOrFail($id)->delete();
        return back();
    }
}
