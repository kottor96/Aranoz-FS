<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mailling extends Model
{
    protected $fillable = ['email','subject','message','statut','achived'];
}
