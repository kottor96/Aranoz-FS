import { useState } from "react";
import { router } from "@inertiajs/react";

export default function ShowSectionDetails({ product, auth }) {
  const [activeTab, setActiveTab] = useState("details");
  const [comment, setComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  
  const specLabels = {
    width: "Width",
    height: "Height",
    deph: "Depth",
    weight: "Weight",
    quality_checking: "Quality checking",
    freshness_duration: "Freshness Duration",
    packeting: "When packeting",
    content: "Each Box contains",
  };

  const formatSpecValue = (key, value) => {
    if (key === "freshness_duration") return `${value} days`;
    if (key === "quality_checking") return value ? "Yes" : "No";
    if (key === "content") return `${value} pcs`;
    return value;
  };

  const tabs = [
    { key: "details", label: "Détails" },
    { key: "description", label: "Description" },
    { key: "comments", label: "Commentaires" },
  ];

  const handleSubmitComment = () => {
    const payload = {
      product_id: product.id,
      comment: comment,
      name: auth?.user?.name || authorName,
      email: auth?.user?.email || authorEmail,
    };

    router.post(route('comment.store'), payload);

    setComment("");
    if (!auth?.user) {
      setAuthorName("");
      setAuthorEmail("");
      setAuthorWebsite("");
    }
  };

  return (
    <section className="my-12 w-full">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Onglets */}
        <div className="flex flex-wrap gap-3 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 hover:bg-gray-200 rounded-full transition ${
                activeTab === tab.key
                  ? "bg-red-500 text-white"
                  : "bg-white border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenu */}
        <div className="space-y-6">
          {/* Détails */}
          {activeTab === "details" && product.specification && (
            <ul className="list-disc list-inside space-y-2">
              {Object.entries(product.specification)
                .filter(
                  ([key]) =>
                    !["id", "product_id", "created_at", "updated_at"].includes(
                      key
                    )
                )
                .map(([key, value]) => (
                  <li key={key}>
                    <strong>{specLabels[key] || key}:</strong>{" "}
                    {formatSpecValue(key, value)}
                  </li>
                ))}
            </ul>
          )}

          {/* Description */}
          {activeTab === "description" && (
            <p>{product.description || "No description."}</p>
          )}

          {/* Commentaires */}
          {activeTab === "comments" && (
            <div className="space-y-4">
              {product.comments?.length > 0 ? (
                <ul className="list-disc list-inside space-y-1">
                  {product.comments.map((c) => (
                    <li key={c.id}>
                      <strong>{c.name}:</strong> {c.message}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Aucun commentaire pour le moment.</p>
              )}

              <div className="flex flex-col gap-4 mt-4">
                {!auth?.user && (
                  <div className="flex flex-col sm:flex-row sm:gap-4 justify-between">
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full sm:w-1/3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full sm:w-1/3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition mt-2 sm:mt-0"
                      value={authorEmail}
                      onChange={(e) => setAuthorEmail(e.target.value)}
                    />
                  </div>
                )}

                <textarea
                  placeholder="Écrire un commentaire..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />

                <button
                  className={`bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition w-full sm:w-auto ${
                    !comment.trim() ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleSubmitComment}
                  disabled={!comment.trim()}
                >
                  Envoyer
                </button>
              </div>


            </div>
          )}
        </div>
      </div>
    </section>
  );
}
