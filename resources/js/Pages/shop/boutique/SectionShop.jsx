import { useState } from "react";

export default function SectionShop({ products, colors }) {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6; // nb d'articles par page

    // Pagination calcul
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = products.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(products.length / productsPerPage);

    return (
        <div className="container mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar gauche - filtres */}
        <aside className="w-1/5 bg-white shadow-md rounded-lg p-4 space-y-6">
            <h2 className="text-lg font-bold mb-2">Filtres</h2>

            {/* Filtre par couleur */}
            <div>
            <h3 className="text-md font-semibold mb-2">Couleur</h3>
            <div className="space-y-2">
                {colors.map((color) => (
                <label key={color} className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>{color}</span>
                </label>
                ))}
            </div>
            </div>
        </aside>

        {/* Contenu principal */}
        <main className="w-3/5 space-y-6">
            {/* Barre de recherche */}
            <div className="flex gap-2">
            <input
                type="text"
                placeholder="Rechercher un produit..."
                className="flex-1 border rounded-lg px-3 py-2"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Rechercher
            </button>
            </div>

            {/* Grille des produits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
                <div
                key={product.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                {/* Image */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />

                <div className="p-4">
                    <h3 className="text-lg font-bold">{product.name}</h3>

                    {/* Prix avec promo */}
                    {product.promoPrice ? (
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500 line-through">
                        {product.price} €
                        </span>
                        <span className="text-red-600 font-bold">
                        {product.promoPrice} €
                        </span>
                    </div>
                    ) : (
                    <p className="text-blue-600 font-semibold">
                        {product.price} €
                    </p>
                    )}
                </div>
                </div>
            ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-lg ${
                    currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                >
                {i + 1}
                </button>
            ))}
            </div>
        </main>
        </div>
    );
}
