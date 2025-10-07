import React, { useState } from "react";
import { router } from "@inertiajs/react";

export default function TableSection({ title, addLabel, onAdd, columns, data }) {
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState("");
    const [tableData, setTableData] = useState(data || []);

    const startEdit = (row, colKey) => {
        setEditId(`${row.id}-${colKey}`);
        setEditValue(row[colKey]);
    };

    const confirmEdit = (row, colKey, routeName) => {
        router.put(route(routeName, row.id), { [colKey]: editValue });
        setTableData((prev) =>
            prev.map((r) => (r.id === row.id ? { ...r, [colKey]: editValue } : r))
        );
        setEditId(null);
        setEditValue("");
    };

    const handleDelete = (row, routeName) => {
        router.delete(route(routeName, row.id));
        setTableData((prev) => prev.filter((r) => r.id !== row.id));
    };

    return (
        <section className="p-6 bg-gray-100 rounded-xl shadow-md">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0">
                <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                <button
                    onClick={onAdd}
                    className="bg-blue-custom hover:brightness-75 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2"
                >
                    <span className="text-lg font-bold">+</span> {addLabel}
                </button>
            </div>

            {/* Table responsive */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg shadow-sm table-auto min-w-[600px]">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    className="py-3 px-6 text-left min-w-[120px] whitespace-nowrap"
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row) => (
                            <tr key={row.id} className="border-b hover:bg-gray-50 transition">
                                {columns.map((col) => (
                                    <td
                                        key={col.key}
                                        className="py-3 px-6 align-top min-w-[120px] whitespace-nowrap"
                                    >
                                        {/* Colonne editable */}
                                        {col.editable ? (
                                            editId === `${row.id}-${col.key}` ? (
                                                <div className="flex flex-wrap gap-2">
                                                    <input
                                                        type="text"
                                                        value={editValue}
                                                        onChange={(e) =>
                                                            setEditValue(e.target.value)
                                                        }
                                                        className="border rounded px-2 py-1 w-full text-gray-800"
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            confirmEdit(row, col.key, col.route)
                                                        }
                                                        className="bg-blue-custom hover:brightness-75 text-white py-1.5 px-3 rounded-md"
                                                    >
                                                        Confirmer
                                                    </button>
                                                </div>
                                            ) : (
                                                <span className="text-gray-800">{row[col.key]}</span>
                                            )
                                        ) : col.render ? (
                                            // Colonne bouton (Modifier ou Supprimer)
                                            <div className="flex gap-2 flex-wrap">
                                                {col.render(row, startEdit, handleDelete)}
                                            </div>
                                        ) : (
                                            <span className="text-gray-800">{row[col.key]}</span>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
