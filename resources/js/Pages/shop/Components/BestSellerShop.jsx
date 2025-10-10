import { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import { Heart, ShoppingCart } from "lucide-react";

export default function BestSellerShop({ products }) {
    const { auth } = usePage().props;

    const likedProducts = products
        .filter(p => p.likes_count > 0)
        .sort((a, b) => b.likes_count - a.likes_count);

    const pageSize = 4;
    const [page, setPage] = useState(0);
    const paginatedProducts = likedProducts.slice(page * pageSize, (page + 1) * pageSize);
    const hasPrev = page > 0;
    const hasNext = (page + 1) * pageSize < likedProducts.length;

    const likedIds = auth.user?.likes?.map(l => l.id) || [];

    const handleAddToCart = (product) => {
        if (!auth.user) return alert("Connectez-vous pour ajouter au panier !");
        router.post(
            route("cart.add"),
            { product_id: product.id }, // Pas de quantity ici
            { preserveScroll: true }
        );
    };

    const handleToggleLike = (product) => {
        if (!auth.user) return alert("Connectez-vous pour liker !");
        router.get(
            route("favorite.toggle"),
            { product_id: product.id },
            { preserveScroll: true }
        );
    };

    return (
        <section id="bestSeller_shop" className="w-full py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex justify-between items-end mb-8">
                    <div className='flex gap-5 items-center'>
                        <h2 className="text-3xl font-bold">Best Seller</h2>
                        <span className="text-sm text-gray-500 uppercase tracking-wide">Shop</span>
                    </div>
                    <div className="flex space-x-3 text-sm font-medium cursor-pointer">
                        {hasPrev && <span className="hover:underline" onClick={() => setPage(page - 1)}>Prev</span>}
                        {hasNext && hasPrev && <span>|</span>}
                        {hasNext && <span className="hover:underline" onClick={() => setPage(page + 1)}>Next</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {paginatedProducts.map((product) => {
                        const isLiked = likedIds.includes(product.id);

                        return (
                            <div key={product.id} className="bg-white p-6 rounded-xl relative">
                                <div className="h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                                    <img 
                                        src={product.images[0].image} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        onClick={() => handleToggleLike(product)}
                                        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        {isLiked ? <Heart className="fill-red-500 text-red-500" /> : <Heart />}
                                    </button>
                                </div>
                                <h3 className="text-base font-semibold">{product.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                                <span className="block mt-3 text-lg font-bold text-indigo-600">€{product.price}</span>

                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg  text-blue transition"
                                >
                                    <ShoppingCart size={18} />
                                    Ajouter au panier
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
