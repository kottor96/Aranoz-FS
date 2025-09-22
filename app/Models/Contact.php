<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = ['street','state','city','country_code','zip_code','number','email','phone_number'];
}
