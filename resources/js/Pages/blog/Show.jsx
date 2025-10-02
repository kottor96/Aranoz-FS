import { Link } from "@inertiajs/react";
import React from "react";

export default function Show({ blogs, filters }) {
    
    
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
                                src={blog.image.image} 
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


               

            </div>
        </section>
    );
}
