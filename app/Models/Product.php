<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name','color','description','price','stock','categorie_id','promotion_id'];
    public function specification(){
        return $this->hasOne(Specification::class);
    }
    public function products(){
        return $this->hasMany(Product::class);
    }
    public function categories(){
        return $this->belongsToMany(Product_categorie::class,'categorie_id');
    }
    public function promotions(){
        return $this->belongsToMany(Promotion::class);
    } 
}
