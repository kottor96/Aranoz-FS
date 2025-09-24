<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'color',
        'description',
        'price',
        'stock',
        'category_id',
        'promo',
        'isPinned',
        'available',
    ];
    
    public function specification(){
        return $this->hasOne(Specification::class);
    }
    public function likes(){
        return $this->hasMany(Like::class);
    }
    public function categories(){
        return $this->belongsToMany(Product_categorie::class,'categorie_id');
    }
    public function paniers(){
        return $this->hasMany(Panier::class);
    }
    public function images(){
        return $this->hasMany(Image_product::class);
    }
}
