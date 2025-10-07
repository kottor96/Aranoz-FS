import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import IntroAdmin from '../Components/IntroAdmin'
import TableSection from '../Components/TableSection';
import { router } from '@inertiajs/react';


export default function Index(prodCat,blogCat,tagCat) {
    const columns = [
        { key: "id", label: "ID" },
        { key: "name", label: "Catégorie", editable: true, route: "categories.update" },
        {
        key: "delete",
        label: "Supprimer",
        render: (row) => (
            <button
                onClick={() => router.delete(route("categories.destroy", row.id))}
                className="bg-rouge-custom hover:brightness-75 text-white py-1.5 px-3 rounded-md"
            >
            Supprimer
            </button>
        ),
        },
    ];

    return (
        <AdminLayout>
            <IntroAdmin titre={'Categories Setting'} text={"Aranoz - Shop System"}/>
            <TableSection
                title="Gestion des catégories"
                addLabel="Add Categories"
                onAdd={() =>
                    router.post(route("categories.store"), { name: "Nouvelle catégorie" })
                }
                columns={columns}
                data={prodCat}
            />
        </AdminLayout>
    )
}
