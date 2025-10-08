import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function SectionContactForm({ contact, countries }) {
    const [formData, setFormData] = useState({
        street: contact.street || '',
        state: contact.state || '',
        city: contact.city || '',
        zip_code: contact.zip_code || '',
        country_code: contact.country_code || '',
        number: contact.number || '',
        email: contact.email || '',
        phone_number: contact.phone_number || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        router.put(`/contacts/${contact.id}`, formData);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-6">Modifier le contact</h2>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-xl shadow-md space-y-4"
                >
                    {[
                        { label: 'Street', name: 'street' },
                        { label: 'State', name: 'state' },
                        { label: 'City', name: 'city' },
                        { label: 'Zip Code', name: 'zip_code' },
                        { label: 'Number', name: 'number' },
                        { label: 'Email', name: 'email' },
                        { label: 'Phone Number', name: 'phone_number' },
                    ].map((field) => (
                        <div key={field.name}>
                        <label className="block mb-1 font-semibold">{field.label}</label>
                        <input
                            type="text"
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                        </div>
                    ))}

                    {/* Country select */}
                    <div>
                        <label className="block mb-1 font-semibold">Country</label>
                        <select
                        name="country_code"
                        value={formData.country_code}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        >
                        <option value="">-- Sélectionner un pays --</option>
                        {countries.map((country) => (
                            <option key={country.id} value={country.code}>
                            {country.name} ({country.code})
                            </option>
                        ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Enregistrer
                    </button>
                </form>
            </div>
        </section>
    );
}
