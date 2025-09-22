<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Billing_detail extends Model
{
    protected $fillable = ['first_name','last_name','company','phone_number','adress','number','city','zip','country_id'];
    
}
