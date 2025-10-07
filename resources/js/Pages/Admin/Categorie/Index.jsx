import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import IntroAdmin from '../Components/IntroAdmin'
import TableSection from '../Components/TableSection';
import { router } from '@inertiajs/react';

export default function Index({ prodCat, blogCat, tagCat }) {

    const columns = [
        { key: "id", label: "ID" },
        { key: "name", label: "Catégorie", editable: true },
        { key: "edit", label: "Modifier" },
        { key: "delete", label: "Supprimer" }
    ];
    const columnsBis = [
        { key: "id", label: "ID" },
        { key: "name", label: "Catégorie", editable: true },
        { key: "delete", label: "Supprimer" }
    ];

    return (
        <AdminLayout>
            <IntroAdmin titre={'Categories Setting'} text={"Aranoz - Shop System"} />
            
            <TableSection
                title="all categories"
                addLabel="Ajouter une catégorie"
                onAdd={() => router.post(route("admin.productCat.store"), { name: "Nouvelle catégorie" })}
                columns={columns}
                data={prodCat}
                updateRoute="admin.productCat.update"
                deleteRoute="admin.productCat.destroy"
            />
            <TableSection
                title="All blog categories"
                addLabel="ajouter un tag"
                onAdd={() => router.post(route("admin.productCat.store"), { name: "Nouvelle catégorie" })}
                columns={columnsBis}
                data={blogCat}
                deleteRoute="admin.productCat.destroy"
            />
            <TableSection
                title="Gestion des tags"
                addLabel="ajouter un tag"
                onAdd={() => router.post(route("admin.productCat.store"), { name: "Nouvelle catégorie" })}
                columns={columnsBis}
                data={tagCat}
                deleteRoute="admin.productCat.destroy"
            />
        </AdminLayout>
    )
}
