<?php

namespace Database\Seeders;

use App\Models\Image_product;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = 
        [
            [
                'name' => 'Chaise Émeraude Élégante',
                'description' => 'Une chaise moderne au vert profond, alliant confort et design minimaliste.',
                'price' => 349.00,
                'stock' => 12,
                'category_id' => 1,
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
                'category_id' => 1,
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
                'category_id' => 1,
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
                'category_id' => 1,
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
                'category_id' => 1,
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
                'category_id' => 1,
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
                'category_id' => 1,
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
                'category_id' => 1,
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
                'category_id' => 7,
                'color' => 'Jaune',
                'images' => [
                    ['image' => 'product_9.png', 'type'=>'image_main', 'product_id' => 9],
                    ['image' => 'product_9.png', 'type'=> 'image_rear', 'product_id' => 9],
                    ['image' => 'product_9.png', 'type'=>'image_left_side', 'product_id' => 9],
                    ['image' => 'product_9.png', 'type'=> 'image_right_side', 'product_id' => 9],
                ]
            ],
            [
                'name' => 'Canaper Soleil Doux',
                'description' => 'Un Canaper jaune confortable qui illumine vos moments de détente.',
                'price' => 179.00,
                'stock' => 18,
                'category_id' => 7,
                'color' => 'Jaune',
                'images' => [
                    ['image' => 'feature_4.png', 'type'=>'image_main', 'product_id' => 10],
                    ['image' => 'feature_4.png', 'type'=> 'image_rear', 'product_id' => 10],
                    ['image' => 'feature_4.png', 'type'=>'image_left_side', 'product_id' => 10],
                    ['image' => 'feature_4.png', 'type'=> 'image_right_side', 'product_id' => 10],
                ]
            ],
            [
                'name' => 'Buffet a Volonter offert au webdevelopeur',
                'description' => "Un buffet qui se remplit tout seul grace au magasin qui l'a vendu.",
                'price' => 179.00,
                'stock' => 18,
                'category_id' => 2,
                'color' => 'Jaune',
                'images' => [
                    ['image' => 'templateP.png', 'type'=>'image_main', 'product_id' => 11],
                    ['image' => 'templateP.png', 'type'=> 'image_rear', 'product_id' => 11],
                    ['image' => 'templateP.png', 'type'=>'image_left_side', 'product_id' => 11],
                    ['image' => 'templateP.png', 'type'=> 'image_right_side', 'product_id' => 11],
                ]
            ],
            [
                'name' => 'Chaise du Codeur Confortable',
                'description' => "Une chaise ergonomique parfaite pour passer des heures à déboguer sans douleur.",
                'price' => 129.99,
                'stock' => 25,
                'category_id' => 1,
                'color' => 'Noir',
                'images' => [
                    ['image' => 'templateP.png', 'type'=>'image_main', 'product_id' => 12],
                    ['image' => 'templateP.png', 'type'=>'image_rear', 'product_id' => 12],
                    ['image' => 'templateP.png', 'type'=>'image_left_side', 'product_id' => 12],
                    ['image' => 'templateP.png', 'type'=>'image_right_side', 'product_id' => 12],
                ]
            ],
            [
                'name' => 'Vaisselier du Développeur Organisé',
                'description' => "Un vaisselier élégant pour ranger aussi bien vos assiettes que vos idées de code.",
                'price' => 249.00,
                'stock' => 12,
                'category_id' => 3,
                'color' => 'Blanc',
                'images' => [
                    ['image' => 'templateP.png', 'type'=>'image_main', 'product_id' => 13],
                    ['image' => 'templateP.png', 'type'=>'image_rear', 'product_id' => 13],
                    ['image' => 'templateP.png', 'type'=>'image_left_side', 'product_id' => 13],
                    ['image' => 'templateP.png', 'type'=>'image_right_side', 'product_id' => 13],
                ]
            ],
            [
                'name' => 'Étagère à Frameworks',
                'description' => "Une étagère robuste capable de supporter tous vos frameworks favoris.",
                'price' => 89.90,
                'stock' => 30,
                'category_id' => 4,
                'color' => 'Chêne clair',
                'images' => [
                    ['image' => 'templateP.png', 'type'=>'image_main', 'product_id' => 14],
                    ['image' => 'templateP.png', 'type'=>'image_rear', 'product_id' => 14],
                    ['image' => 'templateP.png', 'type'=>'image_left_side', 'product_id' => 14],
                    ['image' => 'templateP.png', 'type'=>'image_right_side', 'product_id' => 14],
                ]
            ],
            [
                'name' => 'Bibliothèque du Geek Érudit',
                'description' => "Une bibliothèque spacieuse pour ranger vos mangas, romans et documentations techniques.",
                'price' => 199.00,
                'stock' => 15,
                'category_id' => 5,
                'color' => 'Noyer',
                'images' => [
                    ['image' => 'templateP.png', 'type'=>'image_main', 'product_id' => 15],
                    ['image' => 'templateP.png', 'type'=>'image_rear', 'product_id' => 15],
                    ['image' => 'templateP.png', 'type'=>'image_left_side', 'product_id' => 15],
                    ['image' => 'templateP.png', 'type'=>'image_right_side', 'product_id' => 15],
                ]
            ],
            [
                'name' => 'Canapé du Dév Fatigué',
                'description' => "Un canapé moelleux pour les pauses bien méritées après une nuit de code.",
                'price' => 399.00,
                'stock' => 10,
                'category_id' => 6,
                'color' => 'Gris foncé',
                'images' => [
                    ['image' => 'templateP.png', 'type'=>'image_main', 'product_id' => 16],
                    ['image' => 'templateP.png', 'type'=>'image_rear', 'product_id' => 16],
                    ['image' => 'templateP.png', 'type'=>'image_left_side', 'product_id' => 16],
                    ['image' => 'templateP.png', 'type'=>'image_right_side', 'product_id' => 16],
                ]
            ],
            [
                'name' => 'Fauteuil du Chef de Projet',
                'description' => "Un fauteuil majestueux pour gérer son équipe et ses deadlines avec confort.",
                'price' => 259.00,
                'stock' => 8,
                'category_id' => 7,
                'color' => 'Marron cuir',
                'images' => [
                    ['image' => 'templateP.png', 'type'=>'image_main', 'product_id' => 17],
                    ['image' => 'templateP.png', 'type'=>'image_rear', 'product_id' => 17],
                    ['image' => 'templateP.png', 'type'=>'image_left_side', 'product_id' => 17],
                    ['image' => 'templateP.png', 'type'=>'image_right_side', 'product_id' => 17],
                ]
            ],
            [
                'name' => 'Méridienne du Rêveur Numérique',
                'description' => "Parfaite pour se détendre entre deux projets ou rêver d’un monde sans bugs.",
                'price' => 349.00,
                'stock' => 6,
                'category_id' => 8,
                'color' => 'Bleu nuit',
                'images' => [
                    ['image' => 'templateP.png', 'type'=>'image_main', 'product_id' => 18],
                    ['image' => 'templateP.png', 'type'=>'image_rear', 'product_id' => 18],
                    ['image' => 'templateP.png', 'type'=>'image_left_side', 'product_id' => 18],
                    ['image' => 'templateP.png', 'type'=>'image_right_side', 'product_id' => 18],
                ]
            ],
            [
                'name' => 'Bureau du Codeur Productif',
                'description' => "Un bureau spacieux et moderne, idéal pour accueillir trois écrans et un café.",
                'price' => 289.00,
                'stock' => 20,
                'category_id' => 9,
                'color' => 'Chêne foncé',
                'images' => [
                    ['image' => 'templateP.png', 'type'=>'image_main', 'product_id' => 19],
                    ['image' => 'templateP.png', 'type'=>'image_rear', 'product_id' => 19],
                    ['image' => 'templateP.png', 'type'=>'image_left_side', 'product_id' => 19],
                    ['image' => 'templateP.png', 'type'=>'image_right_side', 'product_id' => 19],
                ]
            ],
            [
                'name' => 'Lit du Dév Épuisé',
                'description' => "Un lit moelleux pour ceux qui dorment plus sur leur clavier que chez eux.",
                'price' => 499.00,
                'stock' => 9,
                'category_id' => 10,
                'color' => 'Beige clair',
                'images' => [
                    ['image' => 'templateP.png', 'type'=>'image_main', 'product_id' => 20],
                    ['image' => 'templateP.png', 'type'=>'image_rear', 'product_id' => 20],
                    ['image' => 'templateP.png', 'type'=>'image_left_side', 'product_id' => 20],
                    ['image' => 'templateP.png', 'type'=>'image_right_side', 'product_id' => 20],
                ]
            ],
            [
                'name' => 'Armoire du Dév Préparé',
                'description' => "Une armoire solide pour ranger vos vêtements… ou cacher vos échecs de déploiement.",
                'price' => 279.00,
                'stock' => 14,
                'category_id' => 11,
                'color' => 'Blanc cassé',
                'images' => [
                    ['image' => 'templateP.png', 'type'=>'image_main', 'product_id' => 21],
                    ['image' => 'templateP.png', 'type'=>'image_rear', 'product_id' => 21],
                    ['image' => 'templateP.png', 'type'=>'image_left_side', 'product_id' => 21],
                    ['image' => 'templateP.png', 'type'=>'image_right_side', 'product_id' => 21],
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
                'category_id' => $p['category_id'],
                'color' => $p['color'],
                'promo' => null,
            ]); 

            foreach ($p['images'] as $image) {
                Image_product::create($image);
            }
        }
    }
}
