<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Panier extends Model
{
    protected $fillable = ['user_id','product_id','quantity'];
    public function users(){
        return $this->belongsToMany(User::class);
    }
    public function products(){
        return $this->belongsToMany(Product::class);
    }
}
