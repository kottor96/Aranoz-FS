import { useState } from "react";

export default function SectionShop({ products, categories }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState("");

    const productsPerPage = 6;

    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory
        ? product.category_id === selectedCategory
        : true;
        const matchesSearch = product.name
        .toLowerCase()
        .includes(searchKeyword.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const colors = [];
    
    return (
        <section className="container mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar gauche - filtres */}
            <div className="w-1/5 bg-white shadow-md rounded-lg p-4 space-y-6">
                <h2 className="text-lg font-bold">Filtres</h2>

                {/* Catégories */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Catégories</h3>
                    <div className="space-y-2">
                        {categories.map((cat) => (
                            <div
                                key={cat.id}
                                className={`cursor-pointer hover:text-blue-600 ${
                                selectedCategory === cat.id ? "text-blue-600 font-bold" : ""
                                }`}
                                onClick={() =>
                                    setSelectedCategory(
                                        selectedCategory === cat.id ? null : cat.id
                                    )
                                }
                            >
                                {cat.name}
                            </div>
                            ))}

                        <div
                            className={`cursor-pointer hover:text-blue-600 ${
                                selectedCategory === null ? "font-bold text-blue-600" : ""
                            }`}
                            onClick={() => setSelectedCategory(null)}
                        >
                        Tout afficher
                        </div>
                    </div>
                </div>

                {/* Couleurs */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Couleurs</h3>
                    <div className="space-y-2">
                    {colors.map((color) => (
                        <div key={color} className="cursor-pointer hover:text-blue-600">
                        {color}
                        </div>
                    ))}
                    </div>
                </div>
            </div>


            {/* Contenu principal */}
            <div className="w-3/5 space-y-6">
                {/* Barre de recherche */}
                <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Rechercher un produit..."
                    className="flex-1 border rounded-lg px-3 py-2"
                    value={searchKeyword}
                    onChange={(e) => {
                    setSearchKeyword(e.target.value);
                    setCurrentPage(1); // reset pagination
                    }}
                />
                
                </div>

                {/* Grille des produits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden"
                    >
                        <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                            <img
                                src={`/storage/product/${product.images[0].image}`}
                                alt={product.name}
                                className="max-h-full object-contain"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{product.name}</h3>
                            {product.promo ? (
                            <p className="text-red-600 font-semibold">
                                {product.promo} €{" "}
                                <span className="line-through text-gray-500 ml-2">
                                    {product.price} €
                                </span>
                            </p>
                            ) : (
                            <p className="text-blue-600 font-semibold">{product.price} €</p>
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
            </div>
        </section>
    );
}
