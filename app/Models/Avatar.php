<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Avatar extends Model
{
    protected $fillable = ['image'];
    public function user(){
        return $this->hasOne('users');
    }
}
