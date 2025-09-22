<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    
    public function specification(){
        return $this->hasOne(Specification::class);
    }
    public function products(){
        return $this->hasMany(Product::class);
    }
}
