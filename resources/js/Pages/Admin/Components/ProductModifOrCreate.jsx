import { router } from "@inertiajs/react";
import { useState } from "react";

export default function ProductSection({ type, product = {}, categories = [] }) {
    const baseImages = [
        { type: "image_main", label: "Main Picture", required: true },
        { type: "image_rear", label: "Rear Picture", required: false },
        { type: "image_left_side", label: "Left Side", required: false },
        { type: "image_right_side", label: "Right Side", required: false },
    ];
    const [form, setForm] = useState({
        name: product.name || "",
        price: product.price || "",
        stock: product.stock || "",
        promo: product.promo || "",
        color: product.color || "",
        category_id: product.category_id || "",
        description: product.description || "",
        images: baseImages.map((img, i) => ({
            type: img.type,
            label: img.label,
            required: img.required,
            image: null,
            sourceType: "",
            preview: product.images?.[i]?.image || "",
        })),
    });

    const handleImageChange = (index, sourceType, e) => {
        const value =
            sourceType === "file" ? e.target.files?.[0] || null : e.target.value;
        setForm((prev) => {
            const images = [...prev.images];
            images[index] = {
                ...images[index],
                image: value,
                sourceType,
                preview:
                    sourceType === "file"
                        ? URL.createObjectURL(value)
                        : value,
            };
            return { ...prev, images };
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mainImg = form.images[0];

        // ⚠️ vérifier si on a une image principale ou une preview existante
        if (!mainImg.image && !mainImg.preview) {
            alert("⚠️ The main picture is required before submitting!");
            return;
        }

        const data = new FormData();
        ["name", "price", "stock", "promo", "color", "category_id", "description"].forEach((field) =>
            data.append(field, form[field])
        );

        form.images.forEach((img, i) => {
            data.append(`images[${i}][type]`, img.type);
            data.append(`images[${i}][format]`, img.sourceType);
            data.append(`images[${i}][image]`, img.image);
        });

        if (type === "update") data.append("_method", "PUT");

        const routeName =
            type === "create"
                ? route("admin.product.store")
                : route("admin.product.update", product.id);

        router.post(routeName, data);
    };
    return (
        <section className="max-w-5xl mx-auto my-10">
            <h2 className="text-2xl font-bold mb-6">
                {type === "update"
                    ? `Modify Product: ${product.name} (ID ${product.id})`
                    : "Create New Product"}
            </h2>

            <form
                onSubmit={handleSubmit}
                className="border border-black p-6 rounded-md flex flex-col gap-6"
            >
                {/* --- Basic info --- */}
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                    className="border-b border-gray-400 py-1"
                />

                <div className="grid grid-cols-3 gap-4">
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="border-b border-gray-400 py-1"
                    />
                    <input
                        type="number"
                        name="stock"
                        value={form.stock}
                        onChange={handleChange}
                        placeholder="Stock"
                        className="border-b border-gray-400 py-1"
                    />
                    <input
                        type="number"
                        name="promo"
                        value={form.promo}
                        onChange={handleChange}
                        placeholder="Promo"
                        className="border-b border-gray-400 py-1"
                    />
                </div>

                {/* --- Images --- */}
                {form.images.map((img, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-2 gap-4 mb-6 border border-black p-4 rounded-md ${
                            img.required ? "bg-gray-100" : ""
                        }`}
                    >
                        <div className="flex flex-col">
                            <input
                                type="file"
                                required={img.required && !img.preview}
                                onChange={(e) => handleImageChange(index, "file", e)}
                            />
                            <label className="text-sm mt-1 font-semibold">
                                {img.label} {img.required && !img.preview && <span className="text-red-600">*</span>}
                            </label>
                        </div>

                        <div className="flex flex-col">
                            <input
                                type="url"
                                placeholder="Image URL (optional)"
                                onChange={(e) => handleImageChange(index, "url", e)}
                            />
                            <label className="text-sm mt-1">or URL</label>
                        </div>

                        {img.preview && (
                            <div className="col-span-2 border rounded-md h-48 flex items-center justify-center bg-gray-50">
                                <img
                                    src={img.preview}
                                    alt={img.type}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        )}
                    </div>
                ))}

                {/* --- Other info --- */}
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="color"
                        value={form.color}
                        onChange={handleChange}
                        placeholder="Color"
                        className="border-b border-gray-400 py-1"
                    />
                    <select
                        name="category_id"
                        value={form.category_id}
                        onChange={handleChange}
                        className="border-b border-gray-400 py-1"
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full border border-gray-300 rounded-md p-2 h-32"
                />

                <button
                    type="submit"
                    className="px-6 py-2 bg-black text-white rounded-md mt-4"
                >
                    {type === "update" ? "Update Product" : "Create Product"}
                </button>
            </form>
        </section>
    );
}
