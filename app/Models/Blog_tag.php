<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog_tag extends Model
{
    protected $fillable = ['blog_id','tag_id'];
    public function blog(){
        return $this->belongsToMany(Blog::class);
    }
    public function tags(){
        return $this->belongsToMany(Tag::class);
    }
}
