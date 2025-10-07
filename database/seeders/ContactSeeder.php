<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contact::create([
            'street'       => 'Place de la minoterie',
            'state'        => 'Molenbeek',
            'city'         => 'Bruxelles',
            'country_code' => 1,
            'zip_code'     => '1080',
            'number'       => '10', 
            'email'        => 'mouss@mouss.be',
            'phone_number' => '0477 88 99 00',
        ]);
    }
}
