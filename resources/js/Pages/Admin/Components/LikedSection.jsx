import { Link } from '@inertiajs/react';
import React from 'react'

export default function LikedSection({products}) {
    const prodTri = [...products].sort((a,b)=>a.likes_count-b.likes_count).filter(el=>el.likes_count!==0)
    return (
        <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center mb-6">
                        <h2 className="text-2xl font-bold">Liked Product</h2>
                    </div>

                    <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="px-6 py-3 border-b">Picture</th>
                            <th className="px-6 py-3 border-b">Product</th>
                            <th className="px-6 py-3 border-b">Category</th>
                            <th className="px-6 py-3 border-b">Stock</th>
                            <th className="px-6 py-3 border-b">Show</th>
                            <th className="px-6 py-3 border-b">Edit</th>
                            <th className="px-6 py-3 border-b">Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {prodTri.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50">
                            {/* Image */}
                            <td className="px-6 py-4 border-b">
                                <img
                                src={`${product.images[0].image}`}
                                alt={product.name}
                                className="w-16 h-16 object-cover rounded"
                                />
                            </td>

                            {/* Product Name */}
                            <td className="px-6 py-4 border-b">{product.name}</td>

                            {/* Category */}
                            <td className="px-6 py-4 border-b">
                                {product.category ? product.category.name : '-'}
                            </td>

                            {/* Stock */}
                            <td className="px-6 py-4 border-b">{product.stock}</td>

                            {/* Show */}
                            <td className="px-6 py-4 border-b">
                                <Link
                                href={route('admin.product.show', product.id)}
                                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                Show
                                </Link>
                            </td>

                            {/* Edit */}
                            <td className="px-6 py-4 border-b">
                                <Link
                                href={route('admin.product.edit', product.id)}
                                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                Edit
                                </Link>
                            </td>

                            {/* Delete */}
                            <td className="px-6 py-4 border-b">
                                <Link
                                href={route('admin.product.destroy', product.id)}
                                method="delete"
                                as="button"
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                Delete
                                </Link>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
            </div>
            </section>
    )
}
