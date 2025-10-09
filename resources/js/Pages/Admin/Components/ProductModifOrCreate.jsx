import { router } from "@inertiajs/react";
import { useState } from "react";

export default function ProductSection({ type, product = {}, categories = [] }) {
    const images = product.images || [];

    const [form, setForm] = useState({
        name: product.name || "",
        price: product.price || "",
        stock: product.stock || "",
        promo: product.promo || "",
        color: product.color || "",
        category_id: product.category_id || "",
        description: product.description || "",
        imageFiles: Array(4).fill(null),
        imageUrls: Array(4).fill(""),
    });
    
    

    const handleChange = (e, index, field) => {
        const { value, files, name } = e.target;
        if (field === "file") {
        const newFiles = [...form.imageFiles];
        newFiles[index] = files[0];
        setForm({ ...form, imageFiles: newFiles });
        } else if (field === "url") {
        const newUrls = [...form.imageUrls];
        newUrls[index] = value;
        setForm({ ...form, imageUrls: newUrls });
        } else {
        setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
            data.append("name", form.name);
            data.append("price", form.price);
            data.append("stock", form.stock);
            data.append("promo", form.promo);
            data.append("color", form.color);
            data.append("category_id", form.category_id);
            data.append("description", form.description);

            form.imageFiles.forEach((file, i) => {
                if (file) data.append(`imageFiles[${i}]`, file);
            });

            form.imageUrls.forEach((url, i) => {
                if (url) data.append(`imageUrls[${i}]`, url);
            });
        // Submit selon le type
        if (type === "create") {
            router.post(route("admin.product.store"), data);
        } else if (type === "update") {
            router.post(route("admin.product.update", product.id), data);
        }
    };


    return (
        <section className="max-w-5xl mx-auto my-10">
            <h2 className="text-2xl font-bold mb-6">
                {type === "update"
                ? `Products to modify: ${product.name} / prod n°: ${product.id}`
                : "Create new product"}
            </h2>

        
            <form className="border border-black p-6 rounded-md max-w-3xl mx-auto mb-8 flex flex-col gap-6" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border-b border-gray-400 py-1"
                        placeholder="Product Name"
                    />
                    <label className="block mt-1 text-sm">Product Name</label>
                </div>

                <div className="flex gap-4">
                <div className="flex-1 flex flex-col">
                    <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    className="border-b border-gray-400 py-1"
                    />
                    <label className="block mt-1 text-sm">Price</label>
                </div>
                <div className="flex-1 flex flex-col">
                    <input
                    type="number"
                    name="stock"
                    value={form.stock}
                    onChange={handleChange}
                    className="border-b border-gray-400 py-1"
                    />
                    <label className="block mt-1 text-sm">Stock quantity</label>
                </div>
                <div className="flex-1 flex flex-col">
                    <input
                    type="number"
                    name="promo"
                    value={form.promo}
                    onChange={handleChange}
                    className="border-b border-gray-400 py-1"
                    />
                    <label className="block mt-1 text-sm">Product Promo</label>
                </div>
                </div>

            

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="border rounded-md h-48 flex items-center justify-center bg-gray-50">
                    {images[0]?.image ? (
                        <img
                        src={images[0].image}
                        alt="Main Picture"
                        className="object-contain w-full h-full"
                        />
                    ) : (
                        "Main Picture"
                    )}
                    </div>
                    <div className="border rounded-md h-48 flex items-center justify-center bg-gray-50">
                    {images[1]?.image ? (
                        <img
                        src={images[1].image}
                        alt="Rear Picture"
                        className="object-contain w-full h-full"
                        />
                    ) : (
                        "Rear Picture"
                    )}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 border border-black p-4 rounded-md">
                    <div className="flex flex-col">
                        <input type="file" name="mainPicture_file" onChange={(e) => handleChange(e, 0, "file")} />
                        <label className="text-sm mt-1">Main Picture File</label>
                    </div>
                    <div className="flex flex-col">
                        <input type="url" name="mainPicture_url" onChange={(e) => handleChange(e, 0, "url")} placeholder="URL" />
                        <label className="text-sm mt-1">Main Picture URL</label>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 border border-black p-4 rounded-md">
                    <div className="flex flex-col">
                        <input type="file" name="rearPicture_file" onChange={(e) => handleChange(e, 1, "file")} />
                        <label className="text-sm mt-1">Rear Picture File</label>
                    </div>
                    <div className="flex flex-col">
                        <input type="url" name="rearPicture_url" onChange={(e) => handleChange(e, 1, "url")} placeholder="URL" />
                        <label className="text-sm mt-1">Rear Picture URL</label>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="border rounded-md h-48 flex items-center justify-center bg-gray-50">
                        {images[2]?.image ? (
                            <img
                                src={images[2].image}
                                alt="Left Side"
                                className="object-contain w-full h-full"
                            />
                        ) : (
                            "Left Side"
                        )}
                    </div>
                    <div className="border rounded-md h-48 flex items-center justify-center bg-gray-50">
                        {images[3]?.image ? (
                            <img
                                src={images[3].image}
                                alt="Right Side"
                                className="object-contain w-full h-full"
                            />
                        ) : (
                            "Right Side"
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 border border-black p-4 rounded-md">
                    <div className="flex flex-col">
                        <input type="file" name="leftSide_file" onChange={(e) => handleChange(e, 2, "file")} />
                        <label className="text-sm mt-1">Left Side File</label>
                    </div>
                    <div className="flex flex-col">
                        <input type="url" name="leftSide_url" onChange={(e) => handleChange(e, 2, "url")} placeholder="URL" />
                        <label className="text-sm mt-1">Left Side URL</label>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 border border-black p-4 rounded-md">
                    <div className="flex flex-col">
                        <input type="file" name="rightSide_file" onChange={(e) => handleChange(e, 3, "file")} />
                        <label className="text-sm mt-1">Right Side File</label>
                    </div>
                    <div className="flex flex-col">
                        <input type="url" name="rightSide_url" onChange={(e) => handleChange(e, 3, "url")} placeholder="URL" />
                        <label className="text-sm mt-1">Right Side URL</label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <input
                                type="text"
                                name="color"
                                value={form.color}
                                onChange={handleChange}
                                placeholder="Product Color"
                                className="w-full border-b border-gray-400 py-1"
                            />
                            <label className="block mt-1 text-sm">Product Color</label>
                        </div>
                        <div>
                            <select
                                name="category_id"
                                value={form.category_id}
                                onChange={handleChange}
                                className="w-full border-b border-gray-400 py-1"
                            >
                                <option value="">Select category</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                            <label className="block mt-1 text-sm">Categories</label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 h-32"
                            placeholder="Additional Information"
                        />
                        <label className="block mt-1 text-sm">Additional Information</label>
                    </div>
                    <button type="submit" className="px-6 py-2 bg-black text-white rounded-md mt-4">
                        {type === "update" ? "Update Product" : "Create Product"}
                    </button>
                </div>
            </form>
        </section>
    );
}
