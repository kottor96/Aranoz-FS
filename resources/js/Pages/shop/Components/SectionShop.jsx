import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

export default function SectionShop({ products, categories, cat }) {
    const { auth } = usePage().props;
    const catNumber = cat ? Number(cat) : null;
    console.log(auth);
    
    const [selectedCategory, setSelectedCategory] = useState(catNumber);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedColor, setSelectedColor] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState("");

    const productsPerPage = 6;

    // Filtrer par catégorie + recherche
    const preFiltered = products.filter(product => {
        const matchesCategory = selectedCategory ? product.category_id === selectedCategory : true;
        const matchesSearch = product.name.toLowerCase().includes(searchKeyword.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Couleurs dispo
    const colors = [...new Set(preFiltered.map(p => p.color).filter(Boolean))];

    // Filtre couleur final
    const filteredProducts = preFiltered.filter(p => selectedColor ? p.color === selectedColor : true);

    // Pagination
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Liste des product_id likés par l’utilisateur
    const likedProducts = auth.user?.likes?.map(like => like.id) || [];

    // --- Add to Cart
    const handleAddToCart = (productId) => {
        if (!auth?.user) return alert("Connectez-vous pour ajouter au panier !");
        router.post(route("cart.add"), { product_id: productId }, { preserveScroll: true });
    };

    // --- Toggle Like
    const handleToggleLike = (productId) => {
        if (!auth?.user) return alert("Connectez-vous pour liker !");
        router.get(route("favorite.toggle"), { product_id: productId }, { preserveScroll: true });
    };

    return (
        <section className="container max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Sidebar filtres */}
            <div className="space-y-6 bg-white shadow-md rounded-lg p-4 lg:col-span-1">
                {/* Recherche mobile */}
                <div className="flex gap-2 mb-4 lg:hidden">
                    <input
                        type="text"
                        placeholder="Rechercher un produit..."
                        className="flex-1 border rounded-lg px-3 py-2"
                        value={searchKeyword}
                        onChange={e => { setSearchKeyword(e.target.value); setCurrentPage(1); }}
                    />
                </div>

                <h2 className="text-lg font-bold border-b pb-2">Filtres</h2>

                {/* Catégories */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Catégories</h3>
                    <div className="space-y-2">
                        {categories.map(cat => (
                            <div
                                key={cat.id}
                                className={`cursor-pointer hover:text-blue-600 ${selectedCategory === cat.id ? "text-blue-600 font-bold" : ""}`}
                                onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                            >
                                {cat.name}
                            </div>
                        ))}
                        <div
                            className={`cursor-pointer hover:text-blue-600 ${selectedCategory === null ? "font-bold text-blue-600" : ""}`}
                            onClick={() => setSelectedCategory(null)}
                        >
                            Tout afficher
                        </div>
                    </div>
                </div>

                {/* Couleurs */}
                {colors.length > 0 && (
                    <div>
                        <h3 className="text-md font-semibold mb-2">Couleurs</h3>
                        <div className="space-y-2">
                            <div
                                className={`cursor-pointer hover:text-blue-600 ${selectedColor === null ? "font-bold text-blue-600" : ""}`}
                                onClick={() => setSelectedColor(null)}
                            >
                                Toutes
                            </div>
                            {colors.map(color => (
                                <div
                                    key={color}
                                    className={`cursor-pointer hover:text-blue-600 ${selectedColor === color ? "text-blue-600 font-bold" : ""}`}
                                    onClick={() => setSelectedColor(selectedColor === color ? null : color)}
                                >
                                    {color}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Contenu principal */}
            <div className="lg:col-span-4 space-y-6">
                {/* Recherche desktop */}
                <div className="gap-2 hidden lg:flex">
                    <input
                        type="text"
                        placeholder="Rechercher un produit..."
                        className="flex-1 border rounded-lg px-3 py-2"
                        value={searchKeyword}
                        onChange={e => { setSearchKeyword(e.target.value); setCurrentPage(1); }}
                    />
                </div>

                {/* Grille produits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 relative">
                            {/* Like */}
                            <button
                                onClick={() => handleToggleLike(product.id)}
                                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
                            >
                                {likedProducts.includes(product.id) ? (
                                    <Heart className="fill-red-500 text-red-500" />
                                ) : (
                                    <Heart />
                                )}
                            </button>

                            <Link href={route("product.show", product.id)} className="block">
                                <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                                    <img src={`${product.images[0]?.image}`} alt={product.name} className="max-h-full max-w-full object-contain"/>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">{product.name}</h3>
                                    {product.promo ? (
                                        <p className="text-red-600 font-semibold">
                                            {product.promo} € <span className="line-through text-gray-500 ml-2">{product.price} €</span>
                                        </p>
                                    ) : (
                                        <p className="text-blue-600 font-semibold">{product.price} €</p>
                                    )}
                                </div>
                            </Link>

                            {/* Add to cart */}
                            <div className="p-4 pt-0">
                                <button
                                    onClick={() => handleAddToCart(product.id)}
                                    className="w-full flex items-center justify-center gap-2 text-blue-500 py-2 rounded-lg transition"
                                >
                                    <ShoppingCart size={18} />
                                    Ajouter au panier
                                </button>
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
                            className={`px-3 py-1 rounded-lg ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
