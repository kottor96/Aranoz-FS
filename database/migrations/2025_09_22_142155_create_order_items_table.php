<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained()->onDelete('cascade');
            $table->foreignId('product_id')->constrained()->onDelete('cascade');

            // snapshot produit au moment de l'achat
            $table->string('product_name');
            $table->decimal('unit_price', 8, 2);
            $table->integer('quantity')->default(1);
            $table->decimal('total_price', 8, 2);

            // images liées au produit
            $table->string('image_main')->nullable();
            $table->string('image_rear')->nullable();
            $table->string('image_left_side')->nullable();
            $table->string('image_right_side')->nullable();

            // couleur et description au moment de la commande
            $table->string('color')->nullable();
            $table->text('description')->nullable();

            // promotion ou réduction appliquée
            $table->foreignId('promo_id')->nullable()->constrained()->onDelete('set null');

            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
