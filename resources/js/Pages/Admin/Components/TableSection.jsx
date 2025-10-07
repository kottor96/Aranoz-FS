import React, { useState, useEffect } from "react";
import { router } from "@inertiajs/react";

export default function TableSection({ title, addLabel, onAdd, columns, data, updateRoute, deleteRoute }) {
    const [tableData, setTableData] = useState(data || []);
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState("");

    useEffect(() => setTableData(data || []), [data]);

    const startEdit = (row, colKey) => {
        setEditId(`${row.id}-${colKey}`);
        setEditValue(row[colKey]);
    };

    const cancelEdit = () => {
        setEditId(null);
        setEditValue("");
    };

    const confirmEdit = (row, colKey) => {
        if (!row?.id || !colKey || !updateRoute) return;

        router.put(route(updateRoute, row.id), { [colKey]: editValue }, {
            onSuccess: () => {
                setTableData(prev =>
                    prev.map(r => r.id === row.id ? { ...r, [colKey]: editValue } : r)
                );
                cancelEdit();
            }
        });
    };

    const handleDelete = (row) => {
        if (!row?.id || !deleteRoute) return;
        if (!confirm(`Voulez-vous vraiment supprimer "${row.name}" ?`)) return;

        router.delete(route(deleteRoute, row.id), {
            onSuccess: () => setTableData(prev => prev.filter(r => r.id !== row.id))
        });
    };

    return (
        <section className="p-6 bg-gray-100 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0">
                <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                <button
                    onClick={onAdd}
                    className="bg-blue-custom hover:brightness-75 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2"
                >
                    <span className="text-lg font-bold">+</span> {addLabel}
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg shadow-sm table-auto min-w-[600px]">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            {columns.map(col => (
                                <th key={col.key} className="py-3 px-6 text-left min-w-[120px] whitespace-nowrap">
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(row => (
                            <tr key={row.id} className="border-b hover:bg-gray-50 transition">
                                {columns.map(col => (
                                    <td key={col.key} className="py-3 px-6 align-top min-w-[120px] whitespace-nowrap">
                                        {col.editable ? (
                                            editId === `${row.id}-${col.key}` ? (
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={editValue}
                                                        onChange={(e) => setEditValue(e.target.value)}
                                                        className="border rounded px-2 py-1 w-full text-gray-800"
                                                    />
                                                    <button
                                                        onClick={() => confirmEdit(row, col.key)}
                                                        className="bg-blue-custom hover:brightness-75 text-white py-1.5 px-3 rounded-md"
                                                    >
                                                        Confirmer
                                                    </button>
                                                    <button
                                                        onClick={cancelEdit}
                                                        className="bg-gray-300 py-1.5 px-3 rounded-md"
                                                    >
                                                        Annuler
                                                    </button>
                                                </div>
                                            ) : (
                                                <span
                                                    className="text-gray-800 cursor-pointer"
                                                    onClick={() => startEdit(row, col.key)}
                                                >
                                                    {row[col.key]}
                                                </span>
                                            )
                                        ) : col.key === "edit" ? (
                                            <button
                                                onClick={() => startEdit(row, "name")}
                                                className="bg-blue-custom hover:brightness-75 text-white py-1.5 px-3 rounded-md"
                                            >
                                                Modifier
                                            </button>
                                        ) : col.key === "delete" ? (
                                            <button
                                                onClick={() => handleDelete(row)}
                                                className="bg-red-custom hover:brightness-75 text-white py-1.5 px-3 rounded-md"
                                            >
                                                Supprimer
                                            </button>
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
