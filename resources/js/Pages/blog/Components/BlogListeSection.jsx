import { Link } from "@inertiajs/react";
import React from "react";

export default function BlogListSection({ blogs, filters }) {
    console.log(blogs);
    
    
    return (
        <section id="blog-list-section" className="py-16 px-8">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12">
                
                {/* 2/3 pour les blogs */}
                <div className="lg:w-2/3 flex flex-col gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="relative bg-white rounded-lg overflow-hidden shadow-md">
                        
                        {/* Image */}
                        <div className="aspect-w-16 aspect-h-9">
                            <img 
                                src={`/storage/blog/${blog.image.image}`}
                                alt={blog.title} 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Date superposée */}
                        <div className="absolute bottom left-6 transform -translate-y-1/2 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold text-center shadow-md">
                            {new Date(blog.created_at).toLocaleDateString("fr-FR", { day: "2-digit" })}
                            <br />
                            {new Date(blog.created_at).toLocaleDateString("fr-FR", { month: "short" })}
                        </div>

                        {/* Contenu texte */}
                        <div className="p-4 mt-3">
                            <Link className="clicable" href={route('blog.show',blog.id)}>
                                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                            </Link>
                            <p className="text-gray-600 mb-4">{blog.description}</p>
                            
                            {/* Infos bonus */}
                            <div className="flex justify-start gap-4 text-sm text-gray-500">
                                {/* <span>{blog.blog_catagorie.name.join("  ")}</span> | */}
                                <a href={blog.commentsLink} className="underline hover:text-gray-800">
                                    Comments
                                </a>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>


                {/* 1/3 pour les filtres */}
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

            </div>
        </section>
    );
}
