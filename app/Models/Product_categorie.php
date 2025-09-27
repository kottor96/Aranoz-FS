<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product_categorie extends Model
{
    protected $fillable = ['name'];
    public function products(){
        return $this->hasMany(Product::class,'category_id');
    }
}
