import React from "react";
import { Link } from "@inertiajs/react";

export default function ShowOrder({ order }) {
    const totalQuantity = order.order_items?.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = order.order_items?.reduce((acc, item) => acc + parseFloat(item.total_price), 0);
    console.log(order);
    
    return (
        <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <Link href={route('admin.order.index')} className="text-blue-500 hover:underline mb-4 inline-block">
                    &larr; Back to Orders
                </Link>
                <h2 className="text-2xl font-bold mb-6">Order Details</h2>

                <div className="bg-white shadow rounded p-6">
                <p><strong>User:</strong> {order.user.name}</p>
                <p><strong>Email:</strong> {order.user.email}</p>
                <p><strong>Order Number:</strong> {order.order_number}</p>
                <p><strong>Date:</strong> {new Date(order.created_at).toLocaleDateString()}</p>
                <p><strong>Status:</strong> {order.status}</p>

                <h3 className="mt-4 font-semibold">Items:</h3>
                <table className="w-full mt-2 border border-gray-200">
                    <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th className="px-3 py-2 border">Product</th>
                        <th className="px-3 py-2 border">Quantity</th>
                        <th className="px-3 py-2 border">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {order.order_items?.map(item => (
                        <tr key={item.id} className="border-b">
                            <td className="px-3 py-2 border">{item.product_name}</td>
                            <td className="px-3 py-2 border">{item.quantity}</td>
                            <td className="px-3 py-2 border">${parseFloat(item.total_price).toFixed(2)}</td>
                        </tr>
                    ))}
                    <tr className="font-bold">
                        <td className="px-3 py-2 border">Total</td>
                        <td className="px-3 py-2 border">{totalQuantity}</td>
                        <td className="px-3 py-2 border">${totalPrice.toFixed(2)}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    );
}
