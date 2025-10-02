import React from 'react'

export default function Filter(filter,blogs) {
  return (
    <div className="lg:w-1/3 space-y-6">
        {/* Search */}
        <div className="flex flex-col gap-3">
            <div className="relative">
            <input
                type="text"
                placeholder="Search keyword"
                className="w-full border border-gray-300 rounded-lg py-3 pl-4 pr-12 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                🔍
            </span>
            </div>
            <button className="w-full py-3 rounded-lg text-white text-lg redBg hover:bg-gray-800">
                Search
            </button>
        </div>

        {/* Category */}
        <div className="bg-gray-100 p-6 rounded-lg">
            <h4 className="font-bold text-xl mb-4">Category</h4>
            {filters.map((cat) => (
            <div key={cat.id} className="mb-2 cursor-pointer hover:text-blue-600 text-lg">
                {cat.name}
            </div>
            ))}
        </div>

        {/* Recent Posts */}
        <div className="bg-gray-100 p-6 rounded-lg">
            <h4 className="font-bold text-xl mb-4">Recent Posts</h4>
            {blogs
            .slice() // pour ne pas muter l'original
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // tri du plus récent au plus ancien
            .map((post) => (
                <div key={post.id} className="mb-4 border-b border-gray-300 pb-3">
                <h5 className="font-semibold text-gray-700 text-lg truncate" title={post.title}>
                    {post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title}
                </h5>
                <span className="text-sm text-gray-500 block mt-1">{post.date}</span>
                </div>
            ))}
        </div>
        </div>
  )
}
