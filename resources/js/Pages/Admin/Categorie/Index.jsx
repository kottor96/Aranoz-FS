import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import IntroAdmin from '../Components/IntroAdmin'
import TableSection from '../Components/TableSection';

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

            {/* Table des produits */}
            <TableSection
                title="All categories"
                addLabel="Ajouter une catégorie"
                columns={columns}
                data={prodCat}
                updateRoute="admin.productCat.update"
                deleteRoute="admin.productCat.destroy"
                storeRoute="admin.productCat.store"
            />

            {/* Table des blogs */}
            <TableSection
                title="All blog categories"
                addLabel="Ajouter un tag"
                columns={columnsBis}
                data={blogCat}
                deleteRoute="admin.blogCat.destroy"
                storeRoute="admin.blogCat.store"
            />

            {/* Table des tags */}
            <TableSection
                title="Gestion des tags"
                addLabel="Ajouter un tag"
                columns={columnsBis}
                data={tagCat}
                deleteRoute="admin.blogTag.destroy"
                storeRoute="admin.blogTag.store"
            />
        </AdminLayout>
    )
}
