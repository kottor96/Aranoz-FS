export default function GenericTable({ title, columns, data, onAdd, addLabel }) {
  return (
    <section className="p-6 bg-gray-100 rounded-2xl shadow">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{title}</h2>
            <button
                onClick={onAdd}
                className="flex items-center gap-2 bg-blue-custom hover:brightness-75 text-white font-medium px-4 py-2 rounded-xl"
            >
            <span className="text-lg">+</span>
                {addLabel}
            </button>
        </div>

        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead className="bg-gray-200 text-gray-700">
                <tr>
                    {columns.map((col, idx) => (
                    <th key={idx} className="px-4 py-2 text-left font-semibold">
                        {col.label}
                    </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id} className="border-t hover:bg-gray-50">
                    {columns.map((col) => (
                        <td key={col.key} className="px-4 py-2">
                            {col.render ? col.render(row) : row[col.key]}
                        </td>
                    ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
  );
}
