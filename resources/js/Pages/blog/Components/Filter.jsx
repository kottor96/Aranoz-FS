import React from "react";

export default function Filter({ filters, search, setSearch, selectedCat, setSelectedCat }) {
  return (
    <div className="lg:w-1/3 space-y-6">
      {/* Recherche */}
      <div className="flex flex-col gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search keyword"
            value={search}
            onChange={(e) => setSearch(e.target.value)} // 🔗 lien avec Blog.jsx
            className="w-full border border-gray-300 rounded-lg py-3 pl-4 pr-12 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">🔍</span>
        </div>
      </div>

      {/* Catégories */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h4 className="font-bold text-xl mb-4">Category</h4>
        {filters.map((cat) => (
          <div
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)} // 🔗 lien avec Blog.jsx
            className={`mb-2 cursor-pointer text-lg ${
              selectedCat === cat.id ? "text-blue-600 font-bold" : "hover:text-blue-600"
            }`}
          >
            {cat.name}
          </div>
        ))}

        <div
          onClick={() => setSelectedCat(null)}
          className="mt-2 text-sm text-gray-500 cursor-pointer hover:text-blue-500"
        >
          Réinitialiser
        </div>
      </div>
    </div>
  );
}
