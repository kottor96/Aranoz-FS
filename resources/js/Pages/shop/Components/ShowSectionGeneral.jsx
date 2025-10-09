import { useState, useRef } from "react";

export default function ProductShow({ product }) {
    const [activeImage, setActiveImage] = useState(0);
    const sliderRef = useRef(null);
    const startY = useRef(0);
    const currentY = useRef(0);
    const isDragging = useRef(false);
    
    const totalImages = product.images.length;

    // Slide suivante / précédente avec cycle
    const slideNext = () => setActiveImage((prev) => (prev + 1) % totalImages);
    const slidePrev = () => setActiveImage((prev) => (prev - 1 + totalImages) % totalImages);

    // Drag start
    const handleDragStart = (e) => {
        isDragging.current = true;
        startY.current = e.clientY || e.touches[0].clientY;
    };

    // Drag move
    const handleDragMove = (e) => {
        if (!isDragging.current) return;
        currentY.current = e.clientY || e.touches[0].clientY;
    };

    // Drag end
    const handleDragEnd = () => {
        if (!isDragging.current) return;
        const diff = currentY.current - startY.current;
        if (diff < -50) slideNext();
        if (diff > 50) slidePrev();
        isDragging.current = false;
    };

    // Miniatures visibles : précédente / active / suivante
    const prevIndex = (activeImage - 1 + totalImages) % totalImages;
    const nextIndex = (activeImage + 1) % totalImages;
    const visibleThumbs = [prevIndex, activeImage, nextIndex];

    return (
        <section className="flex gap-6 max-w-6xl mx-auto p-6" style={{ minHeight: '400px' }}>

        {/* Image principale */}
        <div
            className="w-[40%] h-[400px] flex flex-col items-center justify-start border overflow-hidden cursor-grab relative"
            ref={sliderRef}
        >
            <div
            className="transition-transform duration-300 flex flex-col"
            style={{ transform: `translateY(-${activeImage * 400}px)` }}
            >
            {product.images.map((img,index) => (
                <div
                    key={img.id}
                    className="w-full h-[400px] flex justify-center items-center flex-shrink-0"
                >
                <img
                    src={`${img.image}`}
                    alt={`${product.name} ${index}`}
                    className="object-contain w-full h-full"
                />
                </div>
            ))}
            </div>
        </div>

        {/* Miniatures à droite */}
        <div className="w-[15%] flex flex-col gap-4 justify-center items-center overflow-hidden">
            {visibleThumbs.map((index) => (
            <div
                key={index}
                className={`h-20 w-20 flex items-center justify-center border rounded cursor-pointer overflow-hidden
                        ${index === activeImage ? "border-red-500 scale-105" : "border-gray-200"}
                        hover:brightness-90 hover:scale-105`}
                onClick={() => setActiveImage(index)}
            >
                <img
                src={`${product.images[index].image}`}
                alt={`${product.name} ${index}`}
                className="max-h-full max-w-full object-contain"
                />
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
        </div>

        </section>
    );
}
