import React, { useState } from 'react';

export default function BestSellerShop({ products }) {
    // Trier les produits par likes_count décroissant
    const sortedProducts = [...products].sort((a, b) => b.likes_count - a.likes_count);

    // Filtrer ceux avec au moins 1 like
    const likedProducts = sortedProducts.filter(p => p.likes_count > 0);

    // Pagination simple : 4 produits par “page”
    const pageSize = 4;
    const [page, setPage] = useState(0);

    const paginatedProducts = likedProducts.slice(page * pageSize, (page + 1) * pageSize);

    // Contrôles Prev / Next
    const hasPrev = page > 0;
    const hasNext = (page + 1) * pageSize < likedProducts.length;

    return (
        <section id="bestSeller_shop" className="w-full py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-8">
                {/* Header */}
                <div className="flex justify-between items-end mb-8">
                    <div className='flex gap-5 items-center'>
                        <h2 className="text-3xl font-bold">Best Seller</h2>
                        <span className="text-sm text-gray-500 uppercase tracking-wide">
                        Shop
                        </span>
                    </div>
                    <div className="flex space-x-3 text-sm font-medium cursor-pointer">
                        {hasPrev && 
                        <span className="hover:underline" onClick={() => setPage(page - 1)}>
                            Prev
                        </span>
                        }
                        {hasNext&&hasPrev&&<span>|</span>}
                        {hasNext && 
                        <>
                            <span className="hover:underline" onClick={() => setPage(page + 1)}>
                            Next
                            </span>
                        </>
                        }
                    </div>
                </div>

                {/* Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {paginatedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white p-6 rounded-xl"
                    >
                    <div className="h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        <img 
                        src={`/storage/product/${product.images[0].image}`} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-base font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                    <span className="block mt-3 text-lg font-bold text-indigo-600">
                        €{product.price}
                    </span>
                    </div>
                ))}
                </div>
            </div>
        </section>

    );
}
