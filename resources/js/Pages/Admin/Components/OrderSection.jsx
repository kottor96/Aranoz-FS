import React from "react";
import { router } from "@inertiajs/react";

export default function PendingOrders({ orders }) {
    // Filtrer uniquement les commandes pending
    const pendingOrders = orders.filter(order => order.status === "pending");

    // Fonction pour afficher les détails
    const showMore = (order) => {
        router.push("", { id: order.id });
    };

    
    const completeOrder = (order) => {
        router.put("", { id: order.id, status: "completed" });
    };

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-6">Pending Orders</h2>
                <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-2 border">User</th>
                        <th className="px-4 py-2 border">Company</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Quantity</th>
                        <th className="px-4 py-2 border">Price</th>
                        <th className="px-4 py-2 border">Order NO</th>
                        <th className="px-4 py-2 border">Date</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    {pendingOrders.map(order => (
                        <tr key={order.id} className="text-center border-b">
                        <td className="px-4 py-2 border">{order.user.name}</td>
                        <td className="px-4 py-2 border">{order.user.company}</td>
                        <td className="px-4 py-2 border">{order.user.email}</td>
                        <td className="px-4 py-2 border">
                            {order.items.reduce((acc, item) => acc + item.quantity, 0)}
                        </td>
                        <td className="px-4 py-2 border">
                            ${order.items.reduce((acc, item) => acc + item.total_price, 0).toFixed(2)}
                        </td>
                        <td className="px-4 py-2 border">{order.order_number}</td>
                        <td className="px-4 py-2 border">{new Date(order.created_at).toLocaleDateString()}</td>
                        <td className="px-4 py-2 border flex justify-center gap-2">
                            <button
                            onClick={() => showMore(order)}
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                            Show More
                            </button>
                            <button
                            onClick={() => completeOrder(order)}
                            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                            Complete
                            </button>
                        </td>
                        </tr>
                    ))}
                    {pendingOrders.length === 0 && (
                        <tr>
                        <td colSpan="8" className="py-4 text-center">
                            No pending orders.
                        </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    );
}
