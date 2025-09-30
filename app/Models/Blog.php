<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $filalble = ['title','blog_categorie_id','description','user_id'];
    public function bloc_tags(){
        return $this->hasMany(Blog_tag::class);
    }
    public function blog_categorie(){
        return $this->belongsTo(Blog_categorie::class);
    }
    public function image(){
        return $this->hasOne(Blog_image::class);
    }
}
