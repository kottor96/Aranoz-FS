import { Link } from "@inertiajs/react";
import React from "react";

export default function Filter({ filters, blogs, search, setSearch, selectedCat, setSelectedCat }) {
  return (
    <div className="lg:w-1/3 space-y-6">
      {/* Recherche */}
      <div className="flex flex-col gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search keyword"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-3 pl-4 pr-12 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">🔍</span>
        </div>
      </div>

      {/* Catégories */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h4 className="font-bold text-xl mb-4">Category</h4>
        {filters.map(cat => (
          <div
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            className={`mb-2 cursor-pointer text-lg ${
              selectedCat === cat.id ? "text-red font-bold" : "text-red-hover"
            }`}
          >
            {cat.name}
          </div>
        ))}
        <div
          onClick={() => setSelectedCat(null)}
          className="mt-2 text-sm text-gray-500 cursor-pointer text-red-hover"
        >
          Réinitialiser
        </div>
      </div>

        {/* Recent Posts (4 derniers) */}
        <div className="bg-gray-100 p-6 rounded-lg">
            <h4 className="font-bold text-xl mb-4">Recent Posts</h4>
            {blogs
                .slice()
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .slice(0, 4)
                .map(post => (
                <div key={post.id} className="mb-4 border-b border-gray-300 pb-3">
                    <Link href={route("blog.show", post.id)} className="text-red-hover">
                        <h5 className="font-semibold text-gray-700 text-red-hover text-lg truncate" title={post.title}>
                            {post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title}
                        </h5>
                    </Link>
                    <span className="text-sm text-gray-500 block mt-1">
                        {new Date(post.created_at).toLocaleDateString("fr-FR")}
                    </span>
                </div>
            ))}
        </div>
    </div>
  );
}
