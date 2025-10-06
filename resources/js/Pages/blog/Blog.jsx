import Layout from "@/Layouts/Layout";
import React, { useState } from "react";
import IntroSection from "@/Components/IntroSection";
import BlogListSection from "./Components/BlogListeSection";

export default function Blog({ blogs, filters,cat }) {
  // 🔗 L’état global du filtrage
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState(cat??null);

  // 🔍 Filtrage centralisé ici
  const filteredBlogs = blogs.filter((blog) => {
    const matchCat = selectedCat ? blog.blog_categorie_id === selectedCat : true;
    const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });
  console.log(selectedCat);
  console.log(blogs[0].blog_categorie_id);
  
  return (
    <Layout>
      <IntroSection titre="Blog" text="Blog - Blogs table" />

      <BlogListSection
        blogs={filteredBlogs}
        filters={filters}
        search={search}
        setSearch={setSearch}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
    </Layout>
  );
}
