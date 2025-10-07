<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $fillable = ["name", "code"]; 

    public function billing_details()
    {
        return $this->hasMany(Billing_detail::class);
    }

    public function contacts()
    {
        return $this->hasMany(Contact::class, 'country_code'); 
    }
}

