import { useState } from 'react';
import { router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
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

        const formData = new FormData();
        formData.append('userName', form.userName);
        formData.append('password', form.password);
        formData.append('password_confirmation', form.password_confirmation);
        formData.append('subscribe', form.subscribe ? 1 : 0);

        if (form.imageFile) {
            formData.append('imageFile', form.imageFile);
        } else if (form.imageUrl) {
            formData.append('imageUrl', form.imageUrl);
        }

        // ⚡ Utilisation de router d'Inertia pour POST
        router.post(route('register'), formData, {
            onError: (err) => setErrors(err),
        });
    };

    return (
        <Layout>
            <section className="flex justify-center items-center min-h-screen my-10 mt-48">
                <div className="flex w-4/5 max-w-5xl">
                    {/* Formulaire */}
                    <div className="w-2/3 p-12">
                        <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
                        <p className="mb-8 text-gray-600">Please register now</p>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Username */}
                            <div>
                                <InputLabel htmlFor="userName" value="Username" />
                                <TextInput
                                    id="userName"
                                    name="userName"
                                    className="mt-1 block w-full"
                                    value={form.userName}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}
                            </div>

                            {/* Image URL */}
                            <div>
                                <InputLabel htmlFor="imageUrl" value="Profile Image (URL)" />
                                <TextInput
                                    id="imageUrl"
                                    name="imageUrl"
                                    className="mt-1 block w-full"
                                    placeholder="https://example.com/my-photo.jpg"
                                    value={form.imageUrl}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <p className="text-center my-2">Or</p>
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
                                    onChange={handleChange}
                                />
                                {preview && (
                                    <img src={preview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-full" />
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
                                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                            </div>

                            {/* Password confirmation */}
                            <div>
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                                <TextInput
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    className="mt-1 block w-full"
                                    value={form.password_confirmation}
                                    onChange={handleChange}
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
                                    checked={form.subscribe}
                                    onChange={handleChange}
                                />
                                <label htmlFor="subscribe" className="text-gray-700">
                                    Subscribe to newsletter
                                </label>
                            </div>

                            {/* Register button */}
                            <PrimaryButton type="submit" className="w-full mt-4 bg-red-custom">
                                Register
                            </PrimaryButton>
                        </form>
                    </div>

                    {/* Zone rouge */}
                    <div className="w-[44%] bg-red-600 text-white flex items-center justify-center p-8">
                        <div className="text-center leading-relaxed">
                            <h3 className="text-lg font-semibold mb-2">You are new? <br />Create new account here</h3>
                            <p className="text-sm text-gray-100">
                                There are advances being made in science and technology every day, 
                                and a good example of this is the...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
