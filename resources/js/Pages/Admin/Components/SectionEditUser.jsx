import React, { useState } from "react";
import { router } from "@inertiajs/react";
import { FiUser } from "react-icons/fi";

export default function SectionUserEdit({ user, roles }) {
    const [formData, setFormData] = useState({
        name: user.name || "",
        email: user.email || "",
        role_id: user.role_id || "",
        image: "",
        type: "",
    });

    const [preview, setPreview] = useState(
        user.avatar
            ? user.avatar.type === "file"
                ? `/storage/avatars/${user.avatar.image}`
                : user.avatar.image
            : null
    );

    const [processing, setProcessing] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "image") {
            if (files && files[0]) {
                setFormData({
                    ...formData,
                    image: files[0],
                    type: "file",
                });
                setPreview(URL.createObjectURL(files[0]));
            } else {
                setFormData({
                    ...formData,
                    image: value,
                    type: "url",
                });
                setPreview(value);
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);

        const form = new FormData();
        form.append("_method", "PUT");
        form.append("name", formData.name);
        form.append("email", formData.email);
        form.append("role_id", formData.role_id);

        if (formData.image) {
            if (formData.type === "file") {
                form.append("image", formData.image); 
            } else if (formData.type === "url") {
                form.append("image_url", formData.image);
            }
        }


        router.post(route("admin.users.update", user.id), form, {
            forceFormData: true,
            preserveScroll: true,
            onFinish: () => setProcessing(false),
            onError: (errors) => {
                console.error("Erreur :", errors);
            },
        });
    };


    return (
        <section className="py-12">
            <div className="max-w-md mx-auto p-6 rounded-2xl">
                <div className="flex justify-start mb-6">
                    <button
                        onClick={() => router.get(route("admin.users.index"))}
                        className="bg-blue-custom text-white font-medium px-4 py-2 rounded-lg hover:brightness-90"
                    >
                        Retour
                    </button>
                </div>

                <div className="flex justify-center mb-6">
                    {preview ? (
                        <img
                            src={preview}
                            alt="Avatar utilisateur"
                            className="w-32 h-32 rounded-full object-cover border"
                        />
                    ) : (
                        <FiUser className="w-32 h-32 text-gray-400" />
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nom</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Rôle</label>
                        <select
                            name="role_id"
                            value={formData.role_id}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2"
                        >
                            <option value="">-- Choisir un rôle --</option>
                            {roles?.map((r) => (
                                <option key={r.id} value={r.id}>
                                    {r.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            URL de l’image ou fichier
                        </label>
                        <input
                            type="text"
                            name="image"
                            value={formData.type === "url" ? formData.image : ""}
                            onChange={handleChange}
                            placeholder="https://exemple.com/avatar.jpg"
                            className="w-full border rounded-lg px-3 py-2 mb-2"
                        />
                        <p className="text-center">ou</p>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                            className={`w-full ${
                                processing
                                    ? "bg-gray-500 cursor-not-allowed"
                                    : "bg-blue-600 hover:brightness-90"
                            } text-white font-medium py-2 rounded-lg`}
                        >
                            {processing ? "Mise à jour..." : "Mettre à jour l’utilisateur"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
