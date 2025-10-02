import React, { useState } from "react";

export default function TrackOrderSection() {
  const [orderId, setOrderId] = useState("");

  const handleTrackOrder = () => {
    // Ici tu peux lancer ta recherche avec orderId
    console.log("Recherche de la commande :", orderId);
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-white rounded-md shadow-sm">
      <p className="mb-4 text-gray-700">
        To track your order please enter your Order ID in the box below and press
        the "Track" button. This was given to you on your receipt and in the
        confirmation email you should have received.
      </p>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter your Order ID"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleTrackOrder}
          className="bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition"
        >
          Track
        </button>
      </div>
    </section>
  );
}
