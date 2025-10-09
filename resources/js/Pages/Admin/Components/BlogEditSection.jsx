import React, { useState } from 'react';
import { useForm, Link, router } from '@inertiajs/react';

export default function BlogEditSection({ blog, blogCat, blogTag }) {
  
  const { data, setData, progress } = useForm({
    title: blog.title || '',
    blog_categorie_id: blog.blog_categorie?.id || '',
    description: blog.description || '',
    image_file: null,
    image_url: '',
    tags: blog.tags?.map(tag => tag.id) || [],
  });

  // Image file / URL exclusifs
  const handleFileChange = (e) => {
    setData('image_file', e.target.files[0]);
    setData('image_url', '');
  };

  const handleUrlChange = (e) => {
    setData('image_url', e.target.value);
    setData('image_file', null);
  };

  const handleTagToggle = (id) => {
    if (data.tags.includes(id)) {
      setData('tags', data.tags.filter(tagId => tagId !== id));
    } else {
      setData('tags', [...data.tags, id]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('blog_categorie_id', data.blog_categorie_id);
    formData.append('description', data.description);
    formData.append('tags', JSON.stringify(data.tags));

    if (data.image_file) {
      formData.append('image_file', data.image_file);
    } else if (data.image_url) {
      formData.append('image_url', data.image_url);
    }

    formData.append('_method', 'PUT'); // important pour Laravel

    router.post(route('admin.blog.update', blog.id), formData, {
      forceFormData: true, 
    });
  };



  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Modifier le blog</h2>
          <Link href={route('admin.blog.index')} className="text-blue-500 hover:underline">
            ← Retour
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image actuelle */}
          {blog.image?.image && (
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Image actuelle :</p>
              <img
                src={blog.image.image}
                alt="Image actuelle"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Image fichier / URL côte à côte */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nouvelle image (fichier)</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="border p-2 rounded w-full"
              />
              {data.image_file && (
                <p className="text-xs text-gray-500 mt-1">Fichier sélectionné : {data.image_file.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Nouvelle image (URL)</label>
              <input
                type="url"
                value={data.image_url}
                onChange={handleUrlChange}
                placeholder="https://exemple.com/image.jpg"
                className="border p-2 rounded w-full"
              />
            </div>
          </div>

          {/* Titre et Catégorie côte à côte */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Titre</label>
              <input
                type="text"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
                className="border p-2 rounded w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Catégorie</label>
              <select
                value={data.blog_categorie_id}
                onChange={(e) => setData('blog_categorie_id', e.target.value)}
                className="border p-2 rounded w-full"
                required
              >
                <option value="">Choisir une catégorie</option>
                {blogCat.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-2">Tags</label>
            <div className="flex flex-wrap gap-4">
              {blogTag.map(tag => (
                <label key={tag.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={data.tags.includes(tag.id)}
                    onChange={() => handleTagToggle(tag.id)}
                  />
                  <span>{tag.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              rows="6"
              className="border p-2 rounded w-full"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Enregistrer
            </button>
          </div>

          {progress && <div className="mt-2 text-sm text-gray-500">Upload : {progress.percentage}%</div>}
        </form>
      </div>
    </section>

  );
}
