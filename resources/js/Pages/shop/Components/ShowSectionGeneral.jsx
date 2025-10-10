import { useState, useRef, useEffect } from "react";
import { router, usePage } from "@inertiajs/react";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductShow({ product }) {
    const { auth } = usePage().props;
    
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(1); // ← Quantité sélectionnée
    const sliderRef = useRef(null);
    const startY = useRef(0);
    const currentY = useRef(0);
    const isDragging = useRef(false);

    const totalImages = product.images.length;
    
    const slideNext = () => setActiveImage((prev) => (prev + 1) % totalImages);
    const slidePrev = () => setActiveImage((prev) => (prev - 1 + totalImages) % totalImages);

    const handleDragStart = (e) => {
        isDragging.current = true;
        startY.current = e.clientY || e.touches[0].clientY;
    };
    
    const handleDragMove = (e) => {
        if (!isDragging.current) return;
        currentY.current = e.clientY || e.touches[0].clientY;
    };
    
    const handleDragEnd = () => {
        if (!isDragging.current) return;
        const diff = currentY.current - startY.current;
        if (diff < -50) slideNext();
        if (diff > 50) slidePrev();
        isDragging.current = false;
    };

    const prevIndex = (activeImage - 1 + totalImages) % totalImages;
    const nextIndex = (activeImage + 1) % totalImages;
    const visibleThumbs = [prevIndex, activeImage, nextIndex];
    
    // Likes
    const likedProducts = auth.user?.likes?.map(like => like.id) || [];
    const isLiked = likedProducts.includes(product.id);
    const inCart = auth.panier.some(c=>c.product_id===product.id);
    const handleToggleLike = () => {
        if (!auth?.user) return alert("Connectez-vous pour liker !");
        router.get(route("favorite.toggle"), { product_id: product.id }, { preserveScroll: true });
    };

    // Add to cart avec quantité
    const handleAddToCart = () => {
        if (!auth?.user) return alert("Connectez-vous pour ajouter au panier !");
        router.post(
            route("cart.add"),
            { product_id: product.id, quantity },
            { preserveScroll: true }
        );
    };

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    useEffect(() => {
        const itemInCart = auth.panier.find(el => el.product_id === product.id);
        if (itemInCart) {
            setQuantity(itemInCart.quantity);
        } else {
            setQuantity(1);
        }
    }, [auth.panier]);
    return (
        <section className="flex gap-6 max-w-6xl mx-auto p-6" style={{ minHeight: '400px' }}>
            {/* Image principale */}
            <div
                className="w-[40%] h-[400px] flex flex-col items-center justify-start border overflow-hidden cursor-grab relative"
                ref={sliderRef}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                <div className="transition-transform duration-300 flex flex-col"
                     style={{ transform: `translateY(-${activeImage * 400}px)` }}>
                    {product.images.map((img, index) => (
                        <div key={img.id} className="w-full h-[400px] flex justify-center items-center flex-shrink-0 relative">
                            <img src={img.image} alt={`${product.name} ${index}`} className="object-contain w-full h-full"/>
                            <button onClick={handleToggleLike} className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors">
                                {isLiked ? <Heart className="fill-red-500 text-red-500" /> : <Heart />}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Miniatures */}
            <div className="w-[15%] flex flex-col gap-4 justify-center items-center overflow-hidden">
                {visibleThumbs.map((index) => (
                    <div key={index} className={`h-20 w-20 flex items-center justify-center border rounded cursor-pointer overflow-hidden
                        ${index === activeImage ? "border-red-500 scale-105" : "border-gray-200"}
                        hover:brightness-90 hover:scale-105`}
                        onClick={() => setActiveImage(index)}
                    >
                        <img src={product.images[index].image} alt={`${product.name} ${index}`} className="max-h-full max-w-full object-contain"/>
                    </div>
                ))}
            </div>

            {/* Infos produit */}
            <div className="flex-none flex flex-col gap-4" style={{ width: '40%' }}>
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <div className="flex items-center gap-2">
                    {product.discountPrice ? (
                        <>
                            <span className="text-red-500 font-bold text-xl">${product.discountPrice}</span>
                            <span className="line-through text-gray-400">${product.price}</span>
                        </>
                    ) : (
                        <span className="font-bold text-xl">${product.price}</span>
                    )}
                </div>
                <div className="text-sm">
                    <span className="text-gray-500">
                        Category: <span className="text-red-500">{product.category.name}</span>
                    </span>
                    <br />
                    <span className="text-gray-500">
                        Available: {product.available ? "In stock" : "Out of stock"}
                    </span>
                </div>
                <hr />
                <p className="text-gray-700">{product.description}</p>

                <div className="flex items-center gap-2 mt-4">
                    <button onClick={decrementQuantity} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                    <span className="px-3 py-1 border rounded">{quantity}</span>
                    <button onClick={incrementQuantity} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                </div>

                {/* Ajouter ou Modifier */}
                <button
                    onClick={handleAddToCart}
                    className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                        inCart ? "bg-green-600 text-white hover:bg-green-700" : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                >
                    <ShoppingCart size={18} />
                    {inCart ? "Modifier la quantité" : "Ajouter au panier"}
                </button>
            </div>
        </section>
    );
}
