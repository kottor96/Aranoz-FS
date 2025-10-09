import React from "react";

export default function OrderCompleteSection({ orders }) {
    const completedOrders = orders.filter(order => order.status === "completed");

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-6">Completed Orders</h2>
                <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-2 border">User</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Quantity</th>
                        <th className="px-4 py-2 border">Price</th>
                        <th className="px-4 py-2 border">Order NO</th>
                        <th className="px-4 py-2 border">Date</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    {completedOrders.length ? (
                        completedOrders.map(order => (
                        <tr key={order.id} className="text-center border-b">
                            <td className="px-4 py-2 border">{order.user.name}</td>
                            <td className="px-4 py-2 border">{order.user.email}</td>
                            <td className="px-4 py-2 border">
                            {order.order_items?.reduce((acc, item) => acc + item.quantity, 0)}
                            </td>
                            <td className="px-4 py-2 border">
                            $
                            {order.order_items
                                ?.reduce((acc, item) => acc + parseFloat(item.total_price), 0)
                                .toFixed(2)}
                            </td>
                            <td className="px-4 py-2 border">{order.order_number}</td>
                            <td className="px-4 py-2 border">
                            {new Date(order.created_at).toLocaleDateString()}
                            </td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td colSpan="6" className="py-4 text-center">
                            No completed orders.
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
