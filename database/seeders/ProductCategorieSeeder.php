<?php

namespace Database\Seeders;

use App\Models\Product_categorie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductCategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $liste = [
            ['name' => 'Chaises'],
            ['name' => 'Buffets'],
            ['name' => 'Vaisseliers'],
            ['name' => 'Étagères'],
            ['name' => 'Bibliothèques'],
            ['name' => 'Canapés'],
            ['name' => 'Fauteuils'],
            ['name' => 'Méridiennes'],
            ['name' => 'Bureaux'],
            ['name' => 'Lits'],
            ['name' => 'Armoires'],
        ];
        foreach ($liste as $v) {
            Product_categorie::create($v);
        }
    }
}
