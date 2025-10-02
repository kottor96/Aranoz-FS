import { useState } from "react";

export default function ProductShow({ product }) {
  const [activeImage, setActiveImage] = useState(0);

  const handlePrev = () => {
    setActiveImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="flex gap-6 p-6 bg-white shadow-lg rounded-lg">
      {/* Gauche : image principale */}
      <div className="flex-shrink-0 w-1/2 flex items-center justify-center bg-gray-100">
        <img
          src={`/storage/product/${product.images[activeImage].image}`}
          alt={product.name}
          className="object-contain max-h-[400px]"
        />
      </div>

      {/* Milieu : 4 miniatures verticales */}
      <div className="flex flex-col gap-2">
        {product.images.slice(0, 4).map((img, index) => (
          <img
            key={index}
            src={`/storage/product/${img.image}`}
            alt={`${product.name} ${index}`}
            className={`w-20 h-20 object-cover cursor-pointer border ${
              index === activeImage ? "border-red-500" : "border-gray-200"
            } rounded`}
            onClick={() => setActiveImage(index)}
          />
        ))}
      </div>

      {/* Droite : infos produit + navigation */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          {/* Navigation images */}
          <div className="flex gap-2 mb-2">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Next
            </button>
          </div>

          {/* Nom du produit */}
          <h1 className="text-2xl font-bold">{product.name}</h1>

          {/* Prix */}
          <div className="flex items-center gap-2">
            {product.discountPrice ? (
              <>
                <span className="text-red-500 font-bold text-xl">
                  ${product.discountPrice}
                </span>
                <span className="line-through text-gray-400">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="font-bold text-xl">${product.price}</span>
            )}
          </div>

          {/* Category & availability */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-sm">Category:</span>
            <span className="text-red-500 font-medium">{product.category}</span>
            <span className="text-gray-500 text-sm">
              Available: {product.available ? "In stock" : "Out of stock"}
            </span>
          </div>
        </div>

        {/* Description */}
        <hr className="my-4" />
        <p className="text-gray-700">{product.description}</p>
      </div>
    </section>
  );
}
