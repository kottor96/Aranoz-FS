import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link, usePage } from "@inertiajs/react";
import { FiUser } from "react-icons/fi";

export default function AdminNavbar() {
    const { auth } = usePage().props;
    const [openDropdown, setOpenDropdown] = useState(null);

    const dropdownRefs = {
        admin: useRef(),
        user: useRef(),
        blog: useRef(),
        product: useRef(),
        mailbox: useRef(),
        profile: useRef(),
    };

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                openDropdown &&
                dropdownRefs[openDropdown]?.current &&
                !dropdownRefs[openDropdown].current.contains(event.target)
            ) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openDropdown]);

    return (
        <nav className="absolute top-0 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo + Role */}
                    <div className="flex items-center space-x-2">
                        <Link href="/" className="text-2xl font-bold text-red-500">
                            Admin
                        </Link>
                        <span className="text-sm text-brown-600 bg-brun-custom px-2 py-1 rounded-full">
                            {auth.role.name}
                        </span>
                    </div>

                    {/* Menu central */}
                    <div className="hidden md:flex space-x-6 items-center">
                        {/* Admin */}
                        <div className="relative" ref={dropdownRefs.admin}>
                            <button
                                onClick={() => toggleDropdown("admin")}
                                className="flex items-center hover:text-red-500 transition"
                            >
                                Admin <FaAngleDown className="ml-1" />
                            </button>
                            {openDropdown === "admin" && (
                                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-md py-2 z-50">
                                    <Link href={route('admin.category')} className="block px-4 py-2 hover:bg-gray-100">Categories</Link>
                                    <Link href={route('admin.contact.index')} className="block px-4 py-2 hover:bg-gray-100">Contact...</Link>
                                </div>
                            )}
                        </div>

                        {/* User */}
                        <div className="relative" ref={dropdownRefs.user}>
                            <button
                                onClick={() => toggleDropdown("user")}
                                className="flex items-center hover:text-red-500 transition"
                            >
                                User <FaAngleDown className="ml-1" />
                            </button>
                            {openDropdown === "user" && (
                                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-md py-2 z-50">
                                    <Link href={route('admin.users.index')} className="block px-4 py-2 hover:bg-gray-100">Users</Link>
                                </div>
                            )}
                        </div>

                        {/* Orders */}
                        {/* <Link href={route('admin.orders')} className="hover:text-red-500 transition">Orders</Link> */}

                        {/* Blog */}
                        <div className="relative" ref={dropdownRefs.blog}>
                            <button
                                onClick={() => toggleDropdown("blog")}
                                className="flex items-center hover:text-red-500 transition"
                            >
                                Blog <FaAngleDown className="ml-1" />
                            </button>
                            {openDropdown === "blog" && (
                                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-md py-2 z-50">
                                    {/* <Link href={route('admin.blog')} className="block px-4 py-2 hover:bg-gray-100">Blog</Link> */}
                                </div>
                            )}
                        </div>

                        {/* Product */}
                        <div className="relative" ref={dropdownRefs.product}>
                            <button
                                onClick={() => toggleDropdown("product")}
                                className="flex items-center hover:text-red-500 transition"
                            >
                                Product <FaAngleDown className="ml-1" />
                            </button>
                            {openDropdown === "product" && (
                                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-md py-2 z-50">
                                    {/* <Link href={route('admin.product')} className="block px-4 py-2 hover:bg-gray-100">Product</Link> */}
                                    {/* <Link href={route('admin.product.liked')} className="block px-4 py-2 hover:bg-gray-100">Product liked</Link> */}
                                </div>
                            )}
                        </div>

                        {/* Mailbox */}
                        <div className="relative" ref={dropdownRefs.mailbox}>
                            <button
                                onClick={() => toggleDropdown("mailbox")}
                                className="flex items-center hover:text-red-500 transition"
                            >
                                Mailbox <FaAngleDown className="ml-1" />
                            </button>
                            {openDropdown === "mailbox" && (
                                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-md py-2 z-50">
                                    <Link href={route('admin.message')} className="block px-4 py-2 hover:bg-gray-100">Message</Link>
                                    <Link href={route('admin.message.archived')} className="block px-4 py-2 hover:bg-gray-100">Archived</Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Profil + Avatar */}
                    <div className="flex items-center space-x-4 relative" ref={dropdownRefs.profile}>
                        <button
                            onClick={() => toggleDropdown("profile")}
                            className="p-2 rounded-full hover:bg-gray-100 transition"
                        >
                            {auth.avatar ?  
                            <img
                                src={`/storage/${auth.avatar}`}
                                alt="admin"
                                className="w-10 h-10 rounded-full object-cover border border-gray-300"
                            />
                            : <FiUser/>}
                        </button>
                        {openDropdown === "profile" && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                                <Link href={route('home')} className="block px-4 py-2 hover:bg-gray-100">Back Home</Link>
                                <Link href={route('logout')} method="post" className="block px-4 py-2 hover:bg-gray-100">Logout</Link>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </nav>
    );
}
