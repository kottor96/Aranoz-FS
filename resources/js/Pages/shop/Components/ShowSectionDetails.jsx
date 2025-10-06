import { router } from "@inertiajs/react";
import { useState } from "react";

export default function ShowSectionDetails({ product, auth }) {
  const [activeTab, setActiveTab] = useState("details");
  const [comment, setComment] = useState(""); // state pour le commentaire
  console.log(auth);
    

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

  // Envoi du commentaire
  const handleSubmit = () => {
    router.post("/comments", { product_id: product.id, content: comment });
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

          {activeTab === "description" && (
            <p>{product.description || "No description."}</p>
          )}

          {activeTab === "comments" && (
            <div className="space-y-4">
              {comments.length > 0 ? (
                <ul className="list-disc list-inside space-y-1">
                  {comments.map((c) => (
                    <li key={c.id}>
                      <strong>{c.user_name}:</strong> {c.content}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Aucun commentaire pour le moment.</p>
              )}

              {/* Formulaire d'ajout de commentaire */}
              {auth?.user ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-2 mt-4"
                >
                  <input
                    type="text"
                    placeholder="Écrire un commentaire..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="flex-1 border rounded px-3 py-2"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className={`bg-red-500 text-white px-4 py-2 rounded transition ${
                      loading
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-red-600"
                    }`}
                  >
                    {loading ? "Envoi..." : "Envoyer"}
                  </button>
                </form>
              ) : (
                <p className="text-gray-500 italic">
                  Connectez-vous pour laisser un commentaire.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
