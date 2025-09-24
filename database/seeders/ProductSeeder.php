<?php

namespace Database\Seeders;

use App\Models\Image_product;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Fauteuil Cuir Vintage',
                'description' => 'Fauteuil en cuir de style vintage, confortable et robuste.',
                'price' => 349.00,
                'stock' => 12,
                'images' => [
                    [
                        'image' => 'product_1.png',
                        'type'=>'image_main',
                        'product_id' => 1
                    ],
                    [
                        'image' => 'product_1.png',
                        'type'=> 'image_rear',
                        'product_id' => 1
                    ],
                    [
                        'image' => 'product_1.png',
                        'type'=>'image_left_side',
                        'product_id' => 1
                    ],
                    [
                        'image' => 'product_1.png',
                        'type'=> 'image_right_side',
                        'product_id' => 1
                    ],
                ]
            ],
            [
                'name' => 'Chaise Scandinave Bois',
                'description' => 'Chaise légère en bois inspirée du design scandinave.',
                'price' => 129.00,
                'stock' => 30,
                'images' => [
                    [
                        'image' => 'product_2.png',
                        'type'=>'image_main',
                        'product_id' => 2,
                    ],
                    [
                        'image' => 'product_2.png',
                        'type'=> 'image_rear',
                        'product_id' => 2,
                    ],
                    [
                        'image' => 'product_2.png',
                        'type'=>'image_left_side',
                        'product_id' => 2,
                    ],
                    [
                        'image' => 'product_2.png',
                        'type'=> 'image_right_side',
                        'product_id' => 2,
                    ],
                ]
            ],
            [
                'name' => 'Table Basse Industrielle',
                'description' => 'Table basse avec plateau en bois et pieds en métal.',
                'price' => 199.00,
                'stock' => 8,
                'images' => [
                    [
                        'image' => 'product_3.png',
                        'type'=>'image_main',
                        'product_id' => 3,
                    ],
                    [
                        'image' => 'product_3.png',
                        'type'=> 'image_rear',
                        'product_id' => 3,
                    ],
                    [
                        'image' => 'product_3.png',
                        'type'=>'image_left_side',
                        'product_id' => 3,
                    ],
                    [
                        'image' => 'product_3.png',
                        'type'=> 'image_right_side',
                        'product_id' => 3,
                    ],
                ]
            ],
            [
                'name' => 'Lampe Suspension Moderne',
                'description' => 'Lampe suspension pour salon, éclairage doux et design.',
                'price' => 89.00,
                'stock' => 25,
                'images' => [
                    [
                        'image' => 'product_4.png',
                        'type'=>'image_main',
                        'product_id'=>4
                    ],
                    [
                        'image' => 'product_4.png',
                        'type'=> 'image_rear',
                        'product_id'=>4
                    ],
                    [
                        'image' => 'product_4.png',
                        'type'=>'image_left_side',
                        'product_id'=>4
                    ],
                    [
                        'image' => 'product_4.png',
                        'type'=> 'image_right_side',
                        'product_id'=>4
                    ],
                ]
            ],
            [
                'name' => 'Bibliothèque Étagère Bois',
                'description' => 'Grande bibliothèque modulable pour bureau ou salon.',
                'price' => 259.00,
                'stock' => 6,
                'images' => [
                    [
                        'image' => 'product_5.png',
                        'type'=>'image_main',
                        'product_id' => 5,
                    ],
                    [
                        'image' => 'product_5.png',
                        'type'=> 'image_rear',
                        'product_id' => 5,
                    ],
                    [
                        'image' => 'product_5.png',
                        'type'=>'image_left_side',
                        'product_id' => 5,
                    ],
                    [
                        'image' => 'product_5.png',
                        'type'=>'image_right_side',
                        'product_id' => 5,
                    ],
                ]
            ],
            [
                'name' => 'Pouff Chesterfield',
                'description' => 'Pouff confortable en tissu rare avec finitions soignées.',
                'price' => 189.00,
                'stock' => 15,
                'images' => [
                    [
                        'image' => 'product_6.png',
                        'type'=>'image_main',
                        'product_id' => 6
                    ],
                    [
                        'image' => 'product_6.png',
                        'type'=> 'image_rear',
                        'product_id' => 6
                    ],
                    [
                        'image' => 'product_6.png',
                        'type'=>'image_left_side',
                        'product_id' => 6
                    ],
                    [
                        'image' => 'product_6.png',
                        'type'=> 'image_right_side',
                        'product_id' => 6
                    ],
                ]
            ],
            [
                'name' => 'Étagère Murale Design',
                'description' => 'Étagère murale moderne pour optimiser l\'espace.',
                'price' => 79.00,
                'stock' => 20,
                'images' => [
                    [
                        'image' => 'product_7.png',
                        'type'=>'image_main',
                        'product_id' => 7
                    ],
                    [
                        'image' => 'product_7.png',
                        'type'=> 'image_rear',
                        'product_id' => 7
                    ],
                    [
                        'image' => 'product_7.png',
                        'type'=>'image_left_side',
                        'product_id' => 7
                    ],
                    [
                        'image' => 'product_7.png',
                        'type'=> 'image_right_side',
                        'product_id' => 7
                    ],
                ]
            ],
            [
                'name' => 'Fauteuil Rotin Naturel',
                'description' => 'Fauteuil en rotin tressé naturel, style bohème chic.',
                'price' => 299.00,
                'stock' => 10,
                'images' => [
                    [
                        'image' => 'product_8.png',
                        'type'=>'image_main',
                        'product_id' => 8
                    ],
                    [
                        'image' => 'product_8.png',
                        'type'=> 'image_rear',
                        'product_id' => 8
                    ],
                    [
                        'image' => 'product_8.png',
                        'type'=>'image_left_side',
                        'product_id' => 8
                    ],
                    [
                        'image' => 'product_8.png',
                        'type'=> 'image_right_side',
                        'product_id' => 8
                    ],
                ]
            ],
            [
                'name' => 'Chaise Bureau Moderne',
                'description' => 'Chaise de bureau ergonomique avec dossier réglable.',
                'price' => 179.00,
                'stock' => 18,
                'images' => [
                    [
                        'image' => 'product_9.png',
                        'type'=>'image_main',
                        'product_id' => 9
                    ],
                    [
                        'image' => 'product_9.png',
                        'type'=> 'image_rear',
                        'product_id' => 9
                    ],
                    [
                        'image' => 'product_9.png',
                        'type'=>'image_left_side',
                        'product_id' => 9
                    ],
                    [
                        'image' => 'product_9.png',
                        'type'=> 'image_right_side',
                        'product_id' => 9
                    ],
                ]
            ],
        ];

        foreach ($products as $p) {
            Product::create([
                'name' => $p['name'],
                'description' => $p['description'],
                'price' => $p['price'],
                'stock' => $p['stock'],
                'isPinned' => false,
                'available' => true,
                'category_id' => 1,
                'color' => null,
                'promo' => null,
            ]); 
            foreach ($p['images'] as $image) {
                Image_product::create($image);
            }
        }
    }
}
