<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $fillable = ['user_id','product_id'];
    public function products(){
        return $this->belongsToMany(Product::class);
    }
    public function user(){
        return $this->belongsToMany(User::class);
    }
}
