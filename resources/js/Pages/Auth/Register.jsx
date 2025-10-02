import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Layout from '@/Layouts/Layout';

export default function RegisterModal() {
    const [form, setForm] = useState({
        userName: '',
        image: '',
        password: '',
        password_confirmation: '',
        subscribe: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        // Ici tu peux faire ton post via Inertia ou fetch
    };

    return (
        <Layout>
            <section>
                <div className="flex justify-center items-center min-h-screen bg-gray-100">
                    <div className="flex w-4/5 max-w-5xl shadow-lg">
                        {/* Formulaire à gauche */}
                        <div className="w-2/3 bg-white p-12">
                            <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
                            <p className="mb-8 text-gray-600">Please register now</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <InputLabel htmlFor="userName" value="Username" />
                                    <TextInput
                                        id="userName"
                                        name="userName"
                                        value={form.userName}
                                        className="mt-1 block w-full"
                                        onChange={handleChange}
                                        required
                                    />
                                    <InputError message={errors.userName} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="image" value="Profile Image URL" />
                                    <TextInput
                                        id="image"
                                        name="image"
                                        value={form.image}
                                        className="mt-1 block w-full"
                                        onChange={handleChange}
                                    />
                                    <InputError message={errors.image} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="password" value="Password" />
                                    <TextInput
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={form.password}
                                        className="mt-1 block w-full"
                                        onChange={handleChange}
                                        required
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                                    <TextInput
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type="password"
                                        value={form.password_confirmation}
                                        className="mt-1 block w-full"
                                        onChange={handleChange}
                                        required
                                    />
                                    <InputError message={errors.password_confirmation} />
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="subscribe"
                                        name="subscribe"
                                        checked={form.subscribe}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="subscribe" className="text-gray-700">
                                        Subscribe to newsletter
                                    </label>
                                </div>

                                <PrimaryButton type="submit" className="w-full mt-4">
                                    Register
                                </PrimaryButton>
                            </form>
                        </div>

                        {/* Div rouge à droite */}
                        <div className="w-1/3 bg-red-600 text-white flex items-center justify-center p-8">
                            <p className="text-xl font-semibold text-center">
                                Welcome to our community! <br /> Join us now!
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    );
}
