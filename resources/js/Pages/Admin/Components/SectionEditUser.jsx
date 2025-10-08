import React, { useState } from "react";
import { router } from "@inertiajs/react";

export default function SectionUserEdit({ user, roles }) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    role_id: user?.role_id || "",
    image: user?.image || "",
    file: null,
  });

  const [preview, setPreview] = useState(user?.image || "/default-avatar.png");
  const [processing, setProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      const file = files[0];
      setFormData({ ...formData, file });
      setPreview(file ? URL.createObjectURL(file) : preview);
    } else {
      setFormData({ ...formData, [name]: value });
      if (name === "image") setPreview(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);

    const form = new FormData();
    form.append("_method", "put");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("role_id", formData.role_id);

    if (formData.file) {
      form.append("image", formData.file);
    } else if (formData.image && !formData.image.startsWith("blob:")) {
      form.append("image_url", formData.image);
    }

    router.post(`/users/${user.id}`, form, {
      forceFormData: true,
      onFinish: () => setProcessing(false),
    });
  };

  return (
    <section className="py-12">
      <div className="max-w-md mx-auto bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-md">
        {/* Photo */}
        <div className="flex justify-center mb-6">
          <img
            src={preview}
            alt="Avatar utilisateur"
            className="w-32 h-32 rounded-full object-cover shadow"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nom */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Nom
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800 dark:text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800 dark:text-white"
            />
          </div>

          {/* Rôle */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Rôle
            </label>
            <select
              name="role_id"
              value={formData.role_id}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800 dark:text-white"
            >
              <option value="">-- Choisir un rôle --</option>
              {roles.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              URL de l’image
            </label>
            <input
              type="text"
              name="image"
              value={
                formData.image.startsWith("blob:")
                  ? ""
                  : formData.image || ""
              }
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800 dark:text-white"
              placeholder="https://exemple.com/photo.jpg"
            />
          </div>

          {/* Upload fichier */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Ou choisir un fichier
            </label>
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800 dark:text-white"
            />
          </div>

          {/* Bouton */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={processing}
              className={`w-full ${
                processing
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white font-medium py-2 rounded-lg transition`}
            >
              {processing ? "Mise à jour..." : "Mettre à jour l’utilisateur"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
