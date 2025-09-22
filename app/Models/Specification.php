<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Specification extends Model
{
    protected $fillable = ['width','height','deph','weight','quality_checking','dreshness_duration','packeting','content','product_id'];
    public function product(){
        return $this->belongsTo(Product::class);
    }
}
