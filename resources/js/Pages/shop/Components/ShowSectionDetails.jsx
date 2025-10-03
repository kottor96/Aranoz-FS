import { useState } from "react";

export default function ShowSectionDetails({ product }) {
    const [activeTab, setActiveTab] = useState("details");
    const [comments, setComments] = useState(product.comment || []);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if (!newComment.trim()) return;
        setComments([...comments, { id: Date.now(), text: newComment }]);
        setNewComment("");
    };

    return (
        <section className="w-full max-w-4xl mx-auto mt-8">
        <header className="flex gap-4 mb-4">
            {["details", "description", "comments"].map((tab) => (
            <button
                key={tab}
                className={`
                px-4 py-2 rounded
                bg-transparent
                hover:bg-gray-200
                ${activeTab === tab ? "bg-red-custom text-white" : "text-black"}
                transition-colors duration-200
                `}
                onClick={() => setActiveTab(tab)}
            >
                {tab === "details" ? "Détails" : tab === "description" ? "Description" : "Commentaires"}
            </button>
            ))}
        </header>

        <div className="bg-white shadow p-4 rounded">
            {activeTab === "details" && product.detail && (
            <ul className="list-disc list-inside">
                {Object.entries(product.specification).map(([key, value]) => (
                <li key={key}>
                    <strong>{key}:</strong> {value}
                </li>
                ))}
            </ul>
            )}

            {activeTab === "description" && <p>{product.description}</p>}

            {activeTab === "comments" && (
            <div>
                <ul className="list-disc list-inside mb-4">
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
                </ul>

                <div className="flex gap-2">
                <input
                    type="text"
                    className="border rounded p-2 flex-1"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Ajouter un commentaire..."
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleAddComment}
                >
                    Ajouter
                </button>
                </div>
            </div>
            )}
        </div>
        </section>
    );
}
