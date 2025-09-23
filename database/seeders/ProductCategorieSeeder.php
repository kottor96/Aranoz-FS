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
            ['nom' => 'Chaises'],
            ['nom' => 'Buffets'],
            ['nom' => 'Vaisseliers'],
            ['nom' => 'Étagères'],
            ['nom' => 'Bibliothèques'],
            ['nom' => 'Canapés'],
            ['nom' => 'Fauteuils'],
            ['nom' => 'Méridiennes'],
            ['nom' => 'Bureaux'],
            ['nom' => 'Lits'],
            ['nom' => 'Armoires'],
        ];
        foreach ($liste as $v) {
            Product_categorie::create($v);
        }
    }
}
