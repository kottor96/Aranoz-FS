<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Country;

class CountrySeeder extends Seeder
{
    public function run(): void
    {
        $countries = [
            ['name' => 'Belgique', 'code' => 'BE'], // toujours en premier
            ['name' => 'France', 'code' => 'FR'],
            ['name' => 'Allemagne', 'code' => 'DE'],
            ['name' => 'Pays-Bas', 'code' => 'NL'],
            ['name' => 'Luxembourg', 'code' => 'LU'],
            ['name' => 'Italie', 'code' => 'IT'],
            ['name' => 'Espagne', 'code' => 'ES'],
            ['name' => 'Portugal', 'code' => 'PT'],
            ['name' => 'Royaume-Uni', 'code' => 'GB'],
            ['name' => 'Irlande', 'code' => 'IE'],
            ['name' => 'Suisse', 'code' => 'CH'],
            ['name' => 'Autriche', 'code' => 'AT'],
            ['name' => 'Pologne', 'code' => 'PL'],
            ['name' => 'Suède', 'code' => 'SE'],
            ['name' => 'Norvège', 'code' => 'NO'],
            ['name' => 'Danemark', 'code' => 'DK'],
            ['name' => 'Finlande', 'code' => 'FI'],
            ['name' => 'Grèce', 'code' => 'GR'],
            ['name' => 'Hongrie', 'code' => 'HU'],
            ['name' => 'République tchèque', 'code' => 'CZ'],
            ['name' => 'Slovaquie', 'code' => 'SK'],
            ['name' => 'Slovénie', 'code' => 'SI'],
            ['name' => 'Croatie', 'code' => 'HR'],
            ['name' => 'Bulgarie', 'code' => 'BG'],
            ['name' => 'Roumanie', 'code' => 'RO'],
        ];

        foreach ($countries as $country) {
            Country::create($country);
        }
    }
}
