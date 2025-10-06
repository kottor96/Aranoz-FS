import Layout from '@/Layouts/Layout';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Order({ orders = [], numeroRecherche = '' }) {
    const [numero, setNumero] = useState(numeroRecherche);
    console.log(orders);
    console.log(orders.length ? false : 'ok' );
      
    const hasOrder = orders && Object.keys(orders).length > 0;

    return (
        <Layout>
            <section className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
                <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">
                    <h1 className="text-2xl font-bold mb-6 text-center">Suivi de votre commande</h1>

                    {/* Input pour rechercher un numéro */}
                    <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Numéro de commande"
                        value={numero}
                        onChange={e => setNumero(e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <Link
                        href={route('orders.index',numero)}
                        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
                    >
                        Rechercher
                    </Link>
                    </div>

                    {/* Affichage de la commande si elle existe */}
                    {numeroRecherche && (
            hasOrder ? (
                <div className="bg-gray-50 rounded p-4 shadow-inner">
                <p><strong>Produit :</strong> {orders.produit}</p>
                <p><strong>Statut :</strong> {orders.statut}</p>
                </div>
            ) : (
                <p className="text-red-500 text-center">
                    Aucune commande pour {numeroRecherche}
                </p>
            )
            )}
                </div>
            </section>
        </Layout>
  );
}
