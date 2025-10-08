import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';

export default function SectionContactForm({ contact, countries }) {
    console.log();
    
    const [formData, setFormData] = useState({
        street: '',
        state: '',
        city: '',
        zip_code: '',
        country_code: '',
        number: '',
        email: '',
        phone_number: '',
    });

  
    useEffect(() => {
        if (contact) {
        setFormData({
            street: contact.street || '',
            state: contact.state || '',
            city: contact.city || '',
            zip_code: contact.zip_code || '',
            country_code: contact.country_code || '',
            number: contact.number || '',
            email: contact.email || '',
            phone_number: contact.phone_number || '',
        });
        }
    }, [contact]);
    console.log(contact);
    console.log(formData);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(route('admin.contact.update'), formData);
    };

    return (
        <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Modifier le contact</h2>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-md space-y-4"
            >
            {/* Ligne 1 : Street | State | City */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                <label className="block mb-1 font-semibold">Street</label>
                <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                />
                </div>
                <div>
                <label className="block mb-1 font-semibold">State</label>
                <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                />
                </div>
                <div>
                <label className="block mb-1 font-semibold">City</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                />
                </div>
            </div>

            {/* Ligne 2 : Country Code | Zip Code | Number */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                <label className="block mb-1 font-semibold">Country Code</label>
                <select
                    name="country_code"
                    value={formData.country_code}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                >
                    {countries.map((country) => (
                        <option key={country.id} value={country.id}>
                            {country.name} ({country.code})
                        </option>
                    ))}
                </select>
                </div>
                <div>
                <label className="block mb-1 font-semibold">Zip Code</label>
                <input
                    type="text"
                    name="zip_code"
                    value={formData.zip_code}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                />
                </div>
                <div>
                <label className="block mb-1 font-semibold">Number</label>
                <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                />
                </div>
            </div>

            {/* Ligne 3 : Email | Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <label className="block mb-1 font-semibold">Type your email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                />
                </div>
                <div>
                <label className="block mb-1 font-semibold">Enter your phone number</label>
                <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                />
                </div>
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
