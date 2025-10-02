import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";

export default function Show({ blog, filters, blogs }) {
    console.log(blog, blogs, filters);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState(Array.isArray(blog.comments) ? blog.comments : []);

    const handleAddComment = (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;

        const newComment = {
            id: comments.length + 1,
            text: commentText,
            author: "Utilisateur",
            created_at: new Date().toISOString(),
        };
        setComments([...comments, newComment]);
        setCommentText("");
    };

    return (
    <Layout>

        <section id="blog-show-section" className="py-16 px-8">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12">

                {/* Partie principale du blog */}
                <div className="lg:w-2/3 flex flex-col gap-8">
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="aspect-w-16 aspect-h-9">
                            <img 
                                src={`/storage/blog/${blog.image.image}`}
                                alt={blog.title} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4 mt-3">
                            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                            <p className="text-gray-600 mb-4">{blog.description}</p>
                        </div>
                    </div>

                    {/* Commentaires */}
                    <div className="bg-white rounded-lg shadow-md p-4 mt-6">
                        <h2 className="text-xl font-bold mb-4">Commentaires</h2>

                        {comments.length === 0 ? (
                            <p className="text-gray-500 mb-4">Aucun commentaire pour le moment.</p>
                        ) : (
                            <ul className="flex flex-col gap-3 mb-4">
                                {comments.map((comment) => (
                                    <li key={comment.id} className="border-b border-gray-200 pb-2">
                                        <p className="font-semibold">{comment.author}</p>
                                        <p className="text-gray-600">{comment.text}</p>
                                        <p className="text-xs text-gray-400">
                                            {new Date(comment.created_at).toLocaleString("fr-FR")}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <form onSubmit={handleAddComment} className="flex flex-col gap-2">
                            <textarea
                                className="border rounded-md p-2 w-full"
                                rows={3}
                                placeholder="Écrire un commentaire..."
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            >
                                Ajouter un commentaire
                            </button>
                        </form>
                    </div>
                </div>

                {/* Sidebar exactement comme dans ton code fourni */}
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
    </Layout>
    );
}
