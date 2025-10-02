<?php

namespace Database\Seeders;

use App\Models\Image_product;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'name' => 'Chaise Émeraude Élégante',
                'description' => 'Une chaise moderne au vert profond, alliant confort et design minimaliste.',
                'price' => 349.00,
                'stock' => 12,
                'color' => 'Vert',
                'images' => [
                    ['image' => 'product_1.png', 'type'=>'image_main', 'product_id' => 1],
                    ['image' => 'product_1.png', 'type'=>'image_rear', 'product_id' => 1],
                    ['image' => 'product_1.png', 'type'=>'image_left_side', 'product_id' => 1],
                    ['image' => 'product_1.png', 'type'=>'image_right_side', 'product_id' => 1],
                ]
            ],
            [
                'name' => 'Chaise Mandarine Chic',
                'description' => 'Un siège orange vif qui apporte chaleur et énergie à votre intérieur.',
                'price' => 129.00,
                'stock' => 30,
                'color' => 'Orange',
                'images' => [
                    ['image' => 'product_2.png', 'type'=>'image_main', 'product_id' => 2],
                    ['image' => 'product_2.png', 'type'=>'image_rear', 'product_id' => 2],
                    ['image' => 'product_2.png', 'type'=>'image_left_side', 'product_id' => 2],
                    ['image' => 'product_2.png', 'type'=>'image_right_side', 'product_id' => 2],
                ]
            ],
            [
                'name' => 'Chaise Soleil',
                'description' => 'Un design éclatant en jaune, idéal pour illuminer vos espaces.',
                'price' => 199.00,
                'stock' => 8,
                'color' => 'Jaune',
                'images' => [
                    ['image' => 'product_3.png', 'type'=>'image_main', 'product_id' => 3],
                    ['image' => 'product_3.png', 'type'=>'image_rear', 'product_id' => 3],
                    ['image' => 'product_3.png', 'type'=>'image_left_side', 'product_id' => 3],
                    ['image' => 'product_3.png', 'type'=>'image_right_side', 'product_id' => 3],
                ]
            ],
            [
                'name' => 'Chaise en Cuir Raffinée',
                'description' => "Un fauteuil en cuir travaillé par des artisans, disponible en plusieurs coloris.",
                'price' => 89.00,
                'stock' => 25,
                'color' => 'Marron',
                'images' => [
                    ['image' => 'product_4.png', 'type'=>'image_main', 'product_id'=>4],
                    ['image' => 'product_4.png', 'type'=> 'image_rear', 'product_id'=>4],
                    ['image' => 'product_4.png', 'type'=>'image_left_side', 'product_id'=>4],
                    ['image' => 'product_4.png', 'type'=> 'image_right_side', 'product_id'=>4],
                ]
            ],
            [
                'name' => 'Chaise Neige Pure',
                'description' => 'Une chaise blanche élégante qui s’intègre dans tous les styles de décoration.',
                'price' => 259.00,
                'stock' => 6,
                'color' => 'Blanc',
                'images' => [
                    ['image' => 'product_5.png', 'type'=>'image_main', 'product_id' => 5],
                    ['image' => 'product_5.png', 'type'=> 'image_rear', 'product_id' => 5],
                    ['image' => 'product_5.png', 'type'=>'image_left_side', 'product_id' => 5],
                    ['image' => 'product_5.png', 'type'=> 'image_right_side', 'product_id' => 5],
                ]
            ],
            [
                'name' => 'Chaise Forêt',
                'description' => 'Un vert apaisant qui apporte une touche naturelle et élégante à votre pièce.',
                'price' => 189.00,
                'stock' => 15,
                'color' => 'Vert',
                'images' => [
                    ['image' => 'product_6.png', 'type'=>'image_main', 'product_id' => 6],
                    ['image' => 'product_6.png', 'type'=> 'image_rear', 'product_id' => 6],
                    ['image' => 'product_6.png', 'type'=>'image_left_side', 'product_id' => 6],
                    ['image' => 'product_6.png', 'type'=> 'image_right_side', 'product_id' => 6],
                ]
            ],
            [
                'name' => 'Chaise Perle',
                'description' => 'Un modèle blanc simple et raffiné, parfait pour les intérieurs modernes.',
                'price' => 79.00,
                'stock' => 20,
                'color' => 'Blanc',
                'images' => [
                    ['image' => 'product_7.png', 'type'=>'image_main', 'product_id' => 7],
                    ['image' => 'product_7.png', 'type'=> 'image_rear', 'product_id' => 7],
                    ['image' => 'product_7.png', 'type'=>'image_left_side', 'product_id' => 7],
                    ['image' => 'product_7.png', 'type'=> 'image_right_side', 'product_id' => 7],
                ]
            ],
            [
                'name' => 'Chaise Rubis',
                'description' => 'Un rouge profond qui attire le regard et donne du caractère à vos espaces.',
                'price' => 299.00,
                'stock' => 10,
                'color' => 'Rouge',
                'images' => [
                    ['image' => 'product_8.png', 'type'=>'image_main', 'product_id' => 8],
                    ['image' => 'product_8.png', 'type'=> 'image_rear', 'product_id' => 8],
                    ['image' => 'product_8.png', 'type'=>'image_left_side', 'product_id' => 8],
                    ['image' => 'product_8.png', 'type'=> 'image_right_side', 'product_id' => 8],
                ]
            ],
            [
                'name' => 'Fauteuil Soleil Doux',
                'description' => 'Un fauteuil jaune confortable qui illumine vos moments de détente.',
                'price' => 179.00,
                'stock' => 18,
                'color' => 'Jaune',
                'images' => [
                    ['image' => 'product_9.png', 'type'=>'image_main', 'product_id' => 9],
                    ['image' => 'product_9.png', 'type'=> 'image_rear', 'product_id' => 9],
                    ['image' => 'product_9.png', 'type'=>'image_left_side', 'product_id' => 9],
                    ['image' => 'product_9.png', 'type'=> 'image_right_side', 'product_id' => 9],
                ]
            ],
        ];

        foreach ($products as $p) {
            $product = Product::create([
                'name' => $p['name'],
                'description' => $p['description'],
                'price' => $p['price'],
                'stock' => $p['stock'],
                'isPinned' => false,
                'available' => true,
                'category_id' => 1,
                'color' => $p['color'],
                'promo' => null,
            ]); 

            foreach ($p['images'] as $image) {
                Image_product::create($image);
            }
        }
    }
}
