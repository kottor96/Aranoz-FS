<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Blog_categorie;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
        $blogTag = Tag::all();
        $blogCat = Blog_categorie::all();
        $blog = Blog::with('user','blog_categorie','tags','image')->findOrFail($id);
        return Inertia::render('Admin/Blog/Edit',compact('blog','blogCat','blogTag'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        
        $blog = Blog::with('image', 'tags')->findOrFail($id);
        
        // Validation
        $data = $request->validate([
            'title' => 'required|string',
            'blog_categorie_id' => 'required|exists:blog_categories,id',
            'description' => 'required|string',
            'image_file' => 'nullable|image|max:2048',
            'image_url' => 'nullable|url',
            'tags' => 'nullable|array',
            'tags.*' => 'exists:tags,id',
        ]);
        
        Log::info('Message de debug simple');
        Log::info('Données du blog', ['blog' => $blog]);
        // Mise à jour des champs principaux
        $blog->update([
            'title' => $data['title'],
            'blog_categorie_id' => $data['blog_categorie_id'],
            'description' => $data['description'] ?? null,
        ]);

        if ($request->hasFile('image_file')) {
            $file = $request->file('image_file');
            // Génération du nom de fichier unique
            $filename = time() . '_' . preg_replace('/\s+/', '_', $file->getClientOriginalName());
            $file->storeAs('blog', $filename, 'public');
            $blog->image->update(['image' => "/storage/blog/$filename"]);
        } elseif (!empty($data['image_url'])) {
            $blog->image->update(['image' => $data['image_url']]);
        }


        // Gestion des tags
        if (!empty($data['tags'])) {
            $blog->tags()->sync($data['tags']);
        } else {
            $blog->tags()->sync([]); // supprime tous les tags si vide
        }

        return redirect()->route('admin.blog.index')->with('success', 'Blog mis à jour avec succès');
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
