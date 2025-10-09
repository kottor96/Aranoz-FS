import { router } from '@inertiajs/react';
import React from 'react';

export default function SectionUser({ users }) {
  const roleBadgeClass = (role) => {
    const id = role && (typeof role === 'number' ? role : (role.id ?? null));
    const parsedId = id ? Number(id) : null;
    const name = (role && role.name) ? String(role.name).toLowerCase() : '';

    if (parsedId === 3) return 'bg-red-custom text-white';
    if (parsedId === 2) return 'bg-blue-custom text-white';
    if (parsedId === 1) return 'bg-gris-custom text-gray-800';

    if (name.includes('admin') || name.includes('super')) return 'bg-red-custom text-white';
    if (name.includes('editor') || name.includes('mod')) return 'bg-blue-custom text-white';

    return 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Liste des utilisateurs</h2>
        <div className="overflow-x-auto bg-white shadow-md rounded-xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Statut</th>
                {/* <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">Show</th> */}
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">Edit</th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">Delete</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
              {users.map((user) => {
                const roleName = user.role?.name?.toLowerCase?.() ?? '';
                const isAdmin = roleName.includes('admin') || user.role?.id === 3;

                return (
                    <tr key={user.id}>
                        {/* Name + avatar */}
                        <td className="px-6 py-4 flex items-center gap-3">
                            {user.avatar?.image ? (
                                <img
                                src={
                                  user.avatar.type === "file"
                                  ? `/storage/avatars/${user.avatar.image}`
                                  : user.avatar.image
                                }
                                alt={`${user.name} avatar`}
                                className="w-10 h-10 rounded-full object-cover"
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-600">
                                {user.name ? user.name.charAt(0).toUpperCase() : "?"}
                                </div>
                            )}
                            <span className="font-medium text-gray-900">{user.name}</span>
                        </td>

                        {/* Email */}
                        <td className="px-6 py-4 text-sm text-gray-700">{user.email}</td>

                        {/* Statut (role) */}
                        <td className="px-6 py-4">
                        <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${roleBadgeClass(user.role)}`}
                        >
                            {user.role?.name ?? '—'}
                        </span>
                        </td>

                        {/* Show */}
                        {/* <td className="px-6 py-4 text-center">
                        <button
                            type="button"
                            onClick={() => onShow ? onShow(user) : null}
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Show
                        </button>
                        </td> */}

                        {/* Edit */}
                        <td className="px-6 py-4 text-center">
                        <button
                          type="button"
                          onClick={() => router.get(route('admin.users.edit',user.id))}
                          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        </td>

                        {/* Delete — masqué si admin */}
                        <td className="px-6 py-4 text-center">
                        {!isAdmin && (
                            <button
                            type="button"
                            onClick={() => router.delete(route('admin.users.destroy',user.id))}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                            Delete
                            </button>
                        )}
                        </td>
                    </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
