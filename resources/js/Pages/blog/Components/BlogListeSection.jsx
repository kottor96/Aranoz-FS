import React from "react";

export default function BlogListSection({ blogs, filters }) {
  return (
    <section id="blog-list-section" className="py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* 2/3 pour les blogs */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative bg-white rounded-lg overflow-hidden shadow-md">
              
              {/* Image */}
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Date superposée */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-r-md text-sm font-bold">
                {blog.date} {/* format jm */}
              </div>

              {/* Contenu texte */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.text}</p>
                
                {/* Infos bonus */}
                <div className="flex justify-start gap-4 text-sm text-gray-500">
                  <span>{blog.tags.join(" | ")}</span>
                  <a href={blog.commentsLink} className="underline hover:text-gray-800">
                    Comments
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 1/3 pour les filtres */}
        <div className="lg:w-1/3 space-y-4">
          {filters.map((filter) => (
            <div key={filter.id} className="p-4 bg-gray-100 rounded-lg">
              {filter.name}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
