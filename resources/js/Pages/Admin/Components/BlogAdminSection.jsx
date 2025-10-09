import React from 'react';
import { Link, router } from '@inertiajs/react';
import { FaReact } from 'react-icons/fa';

export default function BlogAdminSection({ blogs }) {
  const handleDelete = (blogId) => {
    if (confirm('Voulez-vous vraiment supprimer ce blog ?')) {
      router.delete(route('admin.blog.destroy', blogId));
    }
  };
  
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* En-tête */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Liste des blogs</h2>

          <Link
            href={route('admin.blog.create')}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            <FaReact className="w-5 h-5" />
            Add a New Blog
          </Link>
        </div>

        {/* Tableau */}
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Image</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Titre</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Catégorie</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Auteur (Rôle)</th>
                <th className="text-right px-6 py-3 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <tr key={blog.id} className="border-b hover:bg-gray-50">
                    {/* Image */}
                    <td className="px-6 py-4">
                      {blog.image?.image ? (
                        <img
                          src={`/storage/blog/${blog.image.image}`}
                          alt={blog.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                      ) : (
                        <span className="text-gray-400 text-sm italic">Aucune</span>
                      )}
                    </td>

                    {/* Titre */}
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {blog.title}
                    </td>

                    {/* Catégorie */}
                    <td className="px-6 py-4 text-gray-600">
                      {blog.blog_categorie?.name || '—'}
                    </td>

                    {/* Auteur + rôle */}
                    <td className="px-6 py-4 text-gray-600">
                      {blog.user ? (
                        <>
                          <span className="text-white text-sm bg-brun-custom p-1 rounded-full">
                            {blog.user.role?.name || '—'}
                          </span>
                        </>
                      ) : (
                        '—'
                      )}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={route('blog.show', blog.id)}
                          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Show
                        </Link>
                        <Link
                          href={route('admin.blog.edit', blog.id)}
                          className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-8 text-center text-gray-500 italic"
                  >
                    Aucun blog disponible.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
