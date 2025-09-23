<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image_product extends Model
{
    protected $fillable = ['name','type','product_id'];
    public function product(){
        return $this->belongsTo(Product::class);
    }
}
