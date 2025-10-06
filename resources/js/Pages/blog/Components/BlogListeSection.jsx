import React from "react";
import { Link } from "@inertiajs/react";
import Filter from "./Filter";

export default function BlogListSection({blogs,filters,search,setSearch,selectedCat,setSelectedCat,}) {
    
    return (
        <section id="blog-list-section" className="py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12">
            {/* Liste des blogs filtrés */}
            <div className="lg:w-2/3 flex flex-col gap-8">
            {blogs.length === 0 ? (
                <p>Aucun article trouvé.</p>
            ) : (
                blogs.map((blog) => (
                <div key={blog.id} className="relative bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9">
                    <img
                        src={`/storage/blog/${blog.image.image}`}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                    </div>

                    <div className="absolute bottom left-6 transform -translate-y-1/2 bg-red-custom text-white px-3 py-1 rounded-md text-sm font-bold text-center shadow-md">
                    {new Date(blog.created_at).toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "short",
                    })}
                    </div>

                    <div className="p-4 mt-3">
                    <Link href={route("blog.show", blog.id)} className="text-red-hover">
                        <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{blog.description}</p>
                    </div>
                </div>
                ))
            )}
            </div>

            {/* Sidebar connectée */}
            <Filter
                blogs={blogs}
                filters={filters}
                search={search}
                setSearch={setSearch}
                selectedCat={selectedCat}
                setSelectedCat={setSelectedCat}
            />
        </div>
        </section>
    );
}
