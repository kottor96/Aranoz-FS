<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Country;

class CountrySeeder extends Seeder
{
    public function run(): void
    {
        // Exemple de pays
        $countries = [
            ['name' => 'Belgique', 'code' => 'BE'],
            ['name' => 'France', 'code' => 'FR'],
            ['name' => 'Allemagne', 'code' => 'DE'],
        ];

        foreach ($countries as $country) {
            Country::create($country);
        }
    }
}
