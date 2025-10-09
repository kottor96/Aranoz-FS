import { useState } from 'react';
import { router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Layout from '@/Layouts/Layout';

export default function LoginPage({ canResetPassword }) {
    const [form, setForm] = useState({
        email: '',
        password: '',
        remember: false,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setForm({ ...form, [name]: checked });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ⚡ Utilisation de router d'Inertia pour POST
        router.post(route('login'), form, {
            onError: (err) => setErrors(err),
        });
    };

    return (
        <Layout>
            <section className="flex justify-center items-center min-h-screen my-10 mt-48">
                <div className="flex w-4/5 max-w-5xl">
                    {/* Zone rouge */}
                    <div className="w-[44%] bg-red-600 text-white flex items-center justify-center p-8">
                        <div className="text-center leading-relaxed">
                            <h3 className="text-lg font-semibold mb-2">
                                New to our Shop? <br />Create an account
                            </h3>
                            <p className="text-sm text-gray-100">
                                There are advances being made in science and
                                technology everyday, and a good example of this is the
                                CREME AN ACCOUNT
                            </p>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="w-2/3 p-12">
                        <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
                        <p className="mb-8 text-gray-600">Please sign in now</p>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Email */}
                            <div>
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="mt-1 block w-full"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <InputLabel htmlFor="password" value="Password" />
                                <TextInput
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="mt-1 block w-full"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm">{errors.password}</p>
                                )}
                            </div>

                            {/* Remember me */}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    name="remember"
                                    className="mr-2"
                                    checked={form.remember}
                                    onChange={handleChange}
                                />
                                <label htmlFor="remember" className="text-gray-700">
                                    Remember me
                                </label>
                            </div>

                            {/* Forgot password */}
                            {canResetPassword && (
                                <div className="mt-4 text-right">
                                    <a
                                        href={route('password.request')}
                                        className="text-sm text-gray-600 underline hover:text-gray-900"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                            )}

                            {/* Login button */}
                            <PrimaryButton type="submit" className="w-full mt-4 bg-red-custom">
                                Log in
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
