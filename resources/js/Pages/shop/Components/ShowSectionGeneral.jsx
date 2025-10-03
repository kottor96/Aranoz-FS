import { useState } from "react";

export default function ProductShow({ product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeImage = (index) => {
    setIsFading(true); // commence le fade-out
    setTimeout(() => {
      setActiveImage(index); // change l'image
      setIsFading(false); // fade-in
    }, 150); // durée du fade
  };

  const handlePrev = () => {
    const prevIndex = activeImage === 0 ? product.images.length - 1 : activeImage - 1;
    changeImage(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = activeImage === product.images.length - 1 ? 0 : activeImage + 1;
    changeImage(nextIndex);
  };

    return (
        <section className="flex gap-6 max-w-6xl mx-auto p-6" style={{ minHeight: '400px' }}>
            {/* Image principale */}
           <div className="w-full h-full flex items-center justify-center border overflow-hidden" style={{ width: '40%' }}>
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${activeImage * 100}%)` }}
                >
                    {product.images.map((img, index) => (
                    <img
                        key={index}
                        src={`/storage/product/${img.image}`}
                        alt={`${product.name} ${index}`}
                        className="object-contain w-full h-full flex-shrink-0"
                    />
                    ))}
                </div>
            </div>

        {/* Miniatures */}
        <div className="flex-none flex flex-col gap-4 justify-center items-center" style={{ width: '15%' }}>
            {product.images.slice(0, 4).map((img, index) => (
                <div
                    key={index}
                    className={`h-20 w-20 flex items-center justify-center border rounded cursor-pointer overflow-hidden
                        transition duration-200
                        ${index === activeImage ? "border-red-500" : "border-gray-200"}
                        hover:brightness-75 hover:scale-105`}
                    onClick={() => changeImage(index)}
                >
                <img
                    src={`/storage/product/${img.image}`}
                    alt={`${product.name} ${index}`}
                    className={`max-h-full max-w-full object-contain cursor-pointer ${
                    index === activeImage ? "border-red-500" : ""
                    }`}
                    onClick={() => changeImage(index)} // toujours cliquable
                />
                </div>
            ))}
        </div>

        {/* Infos produit */}
        <div className="flex-none flex flex-col gap-4" style={{ width: '40%' }}>
            <div className="text-sm text-gray-500">
            <span className="cursor-pointer hover:underline" onClick={handlePrev}>Previous</span>
            <span className="mx-2">|</span>
            <span className="cursor-pointer hover:underline" onClick={handleNext}>Next</span>
            </div>

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
                Category: <span className="text-red-500">{product.category}</span>
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
