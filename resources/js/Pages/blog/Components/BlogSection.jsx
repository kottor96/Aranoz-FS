import React from "react";

export default function BlogSection() {
  return (
    <section id="blog-section" className="py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-5xl font-bold mb-6">Discover Our Blogs</h2>
        {/* Texte sous le titre */}
        <p className="text-xl mb-10">Blog - Blogs table</p>
        {/* Image */}
        <div className="flex justify-center">
          <img 
            src="storage/banner/feature_1.png" 
            alt="Blog Illustration" 
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
