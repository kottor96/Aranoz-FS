<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['blog_id','product_id','message','name','email','website'];
    public function blogs(){
        return $this->belongsToMany(Blog::class);
    }
    public function products(){
        return $this->belongsToMany(Product::class);
    }
}
