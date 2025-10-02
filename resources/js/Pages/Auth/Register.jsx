import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Layout from '@/Layouts/Layout';

export default function RegisterModal() {
    const [form, setForm] = useState({
        userName: '',
        imageUrl: '',
        imageFile: null,
        password: '',
        password_confirmation: '',
        subscribe: false,
    });

    const [preview, setPreview] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === 'checkbox') {
            setForm({ ...form, [name]: checked });
        } else if (type === 'file') {
            const file = files[0];
            setForm({ ...form, imageFile: file });
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => setPreview(reader.result);
                reader.readAsDataURL(file);
            }
        } else {
            setForm({ ...form, [name]: value });
            if (name === 'imageUrl') {
                setPreview(value || null);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ⚡ tu peux gérer l'envoi de imageFile ou imageUrl ici
        console.log(form);
    };

    return (
        <Layout>

            <section className="flex justify-center items-center min-h-scree my-10">
                <div className="flex w-4/5 max-w-5xl">
                        {/* Formulaire (aucun bg, juste le contenu) */}
                        <div className="w-2/3 p-12">
                            <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
                            <p className="mb-8 text-gray-600">Please register now</p>

                            <form className="space-y-4">
                                {/* Username */}
                                <div>
                                    <InputLabel htmlFor="userName" value="Username" />
                                    <TextInput
                                        id="userName"
                                        name="userName"
                                        className="mt-1 block w-full"
                                        required
                                    />
                                </div>

                                {/* Image URL */}
                                <div>
                                    <InputLabel htmlFor="imageUrl" value="Profile Image (URL)" />
                                    <TextInput
                                        id="imageUrl"
                                        name="imageUrl"
                                        className="mt-1 block w-full"
                                        placeholder="https://example.com/my-photo.jpg"
                                    />
                                </div>
                                <div>
                                    <p className='p'>Or</p>
                                </div>

                                {/* Image File */}
                                <div>
                                    <InputLabel htmlFor="imageFile" value="Upload Image" />
                                    <input
                                        type="file"
                                        id="imageFile"
                                        name="imageFile"
                                        accept="image/*"
                                        className="mt-1 block w-full text-black text-sm"
                                    />
                                    <p className="mt-1 text-xs">
                                        <span className="text-red-500 font-semibold">Disclaimer:</span> max 2MB image size!
                                    </p>
                                </div>

                                {/* Password */}
                                <div>
                                    <InputLabel htmlFor="password" value="Password" />
                                    <TextInput
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="mt-1 block w-full"
                                        required
                                    />
                                </div>

                                {/* Password confirmation */}
                                <div>
                                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                                    <TextInput
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type="password"
                                        className="mt-1 block w-full"
                                        required
                                    />
                                </div>

                                {/* Newsletter */}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="subscribe"
                                        name="subscribe"
                                        className="mr-2"
                                    />
                                    <label htmlFor="subscribe" className="text-gray-700">
                                        Subscribe to newsletter
                                    </label>
                                </div>

                                {/* Register button */}
                                <PrimaryButton type="submit" className="w-full mt-4">
                                    Register
                                </PrimaryButton>
                            </form>
                        </div>

                        {/* Zone rouge */}
                        <div className="w-[44%] bg-red-600 text-white flex items-center justify-center p-8">
                            <div className="text-center leading-relaxed">
                                <h3 className="text-lg font-semibold mb-2">You are new ? <br />Create new account here</h3>
                                <p className="text-base mb-3"></p>
                                <p className="text-sm text-gray-100">
                                    There are advances being made in science and technology everyday, 
                                    and a good example of this is the...
                                </p>
                            </div>
                        </div>
                </div>

            </section>
        </Layout>
    );
}
