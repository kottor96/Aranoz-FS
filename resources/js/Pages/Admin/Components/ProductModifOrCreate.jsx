import { useState } from "react";

export default function ProductSection({ type, product = {}, categories = [] }) {
  const [form, setForm] = useState({
    name: product.name || "",
    price: product.price || "",
    stock_quantity: product.stock_quantity || "",
    promo: product.promo || "",
    color: product.color || "",
    category_id: product.category_id || "",
    additional_info: product.additional_info || "",
    image1_file: null,
    image1_url: "",
    image2_file: null,
    image2_url: "",
    image3_file: null,
    image3_url: "",
    image4_file: null,
    image4_url: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    // submit selon type create/update
  };

  return (
    <section className="max-w-5xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">
        {type === "update"
          ? `Products to modify: ${product.name} / prod n°: ${product.id}`
          : "Create new product"}
      </h2>

      {/* Form principal */}
      <form className="border border-black p-6 rounded-md max-w-3xl mx-auto mb-8 flex flex-col gap-6">
        {/* Product Name */}
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

        {/* Trois inputs sur la même ligne */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col">
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="border-b border-gray-400 py-1"
              placeholder="Price"
            />
            <label className="block mt-1 text-sm">Price</label>
          </div>
          <div className="flex-1 flex flex-col">
            <input
              type="number"
              name="stock_quantity"
              value={form.stock_quantity}
              onChange={handleChange}
              className="border-b border-gray-400 py-1"
              placeholder="Stock Quantity"
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
              placeholder="Product Promo"
            />
            <label className="block mt-1 text-sm">Product Promo</label>
          </div>
        </div>
      </form>

      {/* Images 1 et 2 */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border rounded-md h-48 flex items-center justify-center bg-gray-50">
          {product.image1 ? <img src={`/storage/products/${product.image1}`} alt="Main Picture" className="object-cover w-full h-full" /> : "Main Picture"}
        </div>
        <div className="border rounded-md h-48 flex items-center justify-center bg-gray-50">
          {product.image2 ? <img src={`/storage/products/${product.image2}`} alt="Rear Picture" className="object-cover w-full h-full" /> : "Rear Picture"}
        </div>
      </div>

      {/* Form upload image 1 */}
      <form className="grid grid-cols-2 gap-4 mb-8 border border-black p-4 rounded-md">
        <div className="flex flex-col">
          <input type="file" name="image1_file" onChange={handleChange} />
          <label className="text-sm mt-1">Main Picture File</label>
        </div>
        <div className="flex flex-col">
          <input type="url" name="image1_url" onChange={handleChange} placeholder="URL" />
          <label className="text-sm mt-1">Main Picture URL</label>
        </div>
      </form>

      {/* Form upload image 2 */}
      <form className="grid grid-cols-2 gap-4 mb-8 border border-black p-4 rounded-md">
        <div className="flex flex-col">
          <input type="file" name="image2_file" onChange={handleChange} />
          <label className="text-sm mt-1">Rear Picture File</label>
        </div>
        <div className="flex flex-col">
          <input type="url" name="image2_url" onChange={handleChange} placeholder="URL" />
          <label className="text-sm mt-1">Rear Picture URL</label>
        </div>
      </form>

      {/* Images 3 et 4 */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border rounded-md h-48 flex items-center justify-center bg-gray-50">
          {product.image3 ? <img src={`/storage/products/${product.image3}`} alt="Left Side" className="object-cover w-full h-full" /> : "Left Side"}
        </div>
        <div className="border rounded-md h-48 flex items-center justify-center bg-gray-50">
          {product.image4 ? <img src={`/storage/products/${product.image4}`} alt="Right Side" className="object-cover w-full h-full" /> : "Right Side"}
        </div>
      </div>

      {/* Form upload image 3 */}
      <form className="grid grid-cols-2 gap-4 mb-8 border border-black p-4 rounded-md">
        <div className="flex flex-col">
          <input type="file" name="image3_file" onChange={handleChange} />
          <label className="text-sm mt-1">Left Side File</label>
        </div>
        <div className="flex flex-col">
          <input type="url" name="image3_url" onChange={handleChange} placeholder="URL" />
          <label className="text-sm mt-1">Left Side URL</label>
        </div>
      </form>

      {/* Form upload image 4 */}
      <form className="grid grid-cols-2 gap-4 mb-8 border border-black p-4 rounded-md">
        <div className="flex flex-col">
          <input type="file" name="image4_file" onChange={handleChange} />
          <label className="text-sm mt-1">Right Side File</label>
        </div>
        <div className="flex flex-col">
          <input type="url" name="image4_url" onChange={handleChange} placeholder="URL" />
          <label className="text-sm mt-1">Right Side URL</label>
        </div>
      </form>

      {/* Dernier form Update/Create Product */}
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <input type="text" name="color" value={form.color} onChange={handleChange} placeholder="Product Color" className="w-full border-b border-gray-400 py-1"/>
            <label className="block mt-1 text-sm">Product Color</label>
          </div>
          <div>
            <select name="category_id" value={form.category_id} onChange={handleChange} className="w-full border-b border-gray-400 py-1">
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
            name="additional_info"
            value={form.additional_info}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 h-32"
            placeholder="Additional Information"
          />
          <label className="block mt-1 text-sm">Additional Information</label>
        </div>

        <button type="submit" className="px-6 py-2 bg-black text-white rounded-md">
          {type === "update" ? "Update Product" : "Create Product"}
        </button>
      </div>
    </section>
  );
}
