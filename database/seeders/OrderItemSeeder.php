<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Order_item;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            1 => [
                'name' => 'Chaise Émeraude Élégante',
                'description' => 'Une chaise moderne au vert profond, alliant confort et design minimaliste.',
                'price' => 349.00,
                'color' => 'Vert',
                'image_main' => 'product_1.png',
            ],
            2 => [
                'name' => 'Chaise Mandarine Chic',
                'description' => 'Un siège orange vif qui apporte chaleur et énergie à votre intérieur.',
                'price' => 129.00,
                'color' => 'Orange',
                'image_main' => 'product_2.png',
            ],
            3 => [
                'name' => 'Chaise Soleil',
                'description' => 'Un design éclatant en jaune, idéal pour illuminer vos espaces.',
                'price' => 199.00,
                'color' => 'Jaune',
                'image_main' => 'product_3.png',
            ],
            4 => [
                'name' => 'Chaise en Cuir Raffinée',
                'description' => "Un fauteuil en cuir travaillé par des artisans, disponible en plusieurs coloris.",
                'price' => 89.00,
                'color' => 'Marron',
                'image_main' => 'product_4.png',
            ],
            5 => [
                'name' => 'Chaise Neige Pure',
                'description' => 'Une chaise blanche élégante qui s’intègre dans tous les styles de décoration.',
                'price' => 259.00,
                'color' => 'Blanc',
                'image_main' => 'product_5.png',
            ],
            6 => [
                'name' => 'Chaise Forêt',
                'description' => 'Un vert apaisant qui apporte une touche naturelle et élégante à votre pièce.',
                'price' => 189.00,
                'color' => 'Vert',
                'image_main' => 'product_6.png',
            ],
            7 => [
                'name' => 'Chaise Perle',
                'description' => 'Un modèle blanc simple et raffiné, parfait pour les intérieurs modernes.',
                'price' => 79.00,
                'color' => 'Blanc',
                'image_main' => 'product_7.png',
            ],
            8 => [
                'name' => 'Chaise Rubis',
                'description' => 'Un rouge profond qui attire le regard et donne du caractère à vos espaces.',
                'price' => 299.00,
                'color' => 'Rouge',
                'image_main' => 'product_8.png',
            ],
            9 => [
                'name' => 'Fauteuil Soleil Doux',
                'description' => 'Un fauteuil jaune confortable qui illumine vos moments de détente.',
                'price' => 179.00,
                'color' => 'Jaune',
                'image_main' => 'product_9.png',
            ],
        ];

        // Récupère toutes les commandes existantes
        $orders = Order::all();

        foreach ($orders as $order) {
            // Chaque commande aura 2 à 3 items
            $itemCount = rand(2, 3);

            for ($i = 0; $i < $itemCount; $i++) {
                $productId = rand(1, 9);
                $product = $products[$productId];
                $quantity = rand(1, 3);

                Order_item::create([
                    'order_id' => $order->id,
                    'product_id' => $productId,
                    'product_name' => $product['name'],
                    'unit_price' => $product['price'],
                    'quantity' => $quantity,
                    'total_price' => $product['price'] * $quantity,
                    'color' => $product['color'],
                    'description' => $product['description'],
                    'image_main' => $product['image_main'],
                    'promotion_id' => null,
                ]);
            }
        }
    }
}
