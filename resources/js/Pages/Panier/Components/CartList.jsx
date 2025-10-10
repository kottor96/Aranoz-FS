import { useState } from "react";
import { router, usePage } from "@inertiajs/react";

export default function CartList() {
    const { auth } = usePage().props;
    const [cartItems, setCartItems] = useState(auth.panier || []);

    // Modifier la quantité
    const updateQuantity = (item, delta) => {
        if (item.quantity + delta < 1) {
            if (!confirm("La quantité va devenir 0, voulez-vous retirer ce produit du panier ?")) return;
        }

        const newQuantity = item.quantity + delta;
            router.post(
                route("cart.add"),
                    { product_id: item.id, quantity:newQuantity },
                    { preserveScroll: true }
                );
    };

    // Calculer le total
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.product.discountPrice || item.product.price) * item.quantity, 0);
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Votre panier</h1>

            <div className="space-y-4">
                {cartItems.map(item => (
                    <div key={item.id} className="flex items-center gap-4 border p-4 rounded-lg">
                        {/* Image produit */}
                        <img
                            src={item.product.images[0]?.image}
                            alt={item.product.name}
                            className="w-20 h-20 object-contain rounded"
                        />

                        {/* Nom & Prix */}
                        <div className="flex-1">
                            <h2 className="font-semibold">{item.product.name}</h2>
                            <p>
                                Prix : $
                                {item.product.discountPrice
                                    ? `${item.product.discountPrice} (-${Math.round((1 - item.product.discountPrice / item.product.price) * 100)}%)`
                                    : item.product.price}
                            </p>
                        </div>

                        {/* Quantité */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => updateQuantity(item, -1)}
                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                -
                            </button>
                            <span className="px-3 py-1 border rounded">{item.quantity}</span>
                            <button
                                onClick={() => updateQuantity(item, 1)}
                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                +
                            </button>
                        </div>

                        {/* Total produit */}
                        <div className="w-32 text-right font-semibold">
                            ${(item.product.discountPrice || item.product.price) * item.quantity}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer boutons */}
            <div className="flex justify-between mt-6">
                <button
                    onClick={() => router.get(route("shop.index"))}
                    className="px-6 py-3 bg-gray-200 rounded hover:bg-gray-300"
                >
                    Continuer vos achats
                </button>

                <div className="flex items-center gap-4">
                    <span className="font-bold text-lg">Total : ${totalPrice.toFixed(2)}</span>
                    <button
                        onClick={() => router.get(route("checkout.index"))}
                        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Passer à la commande
                    </button>
                </div>
            </div>
        </div>
    );
}
