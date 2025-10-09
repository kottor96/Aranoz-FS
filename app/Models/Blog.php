<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = ['title','blog_categorie_id','description','user_id'];
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'blog_tags', 'blog_id', 'tag_id');
    }
    public function blog_categorie(){
        return $this->belongsTo(Blog_categorie::class);
    }
    public function image(){
        return $this->hasOne(Blog_image::class);
    }
    public function comments(){
        return $this->hasMany(Comment::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
