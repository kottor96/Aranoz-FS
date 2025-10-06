import { useState, useRef, useEffect } from "react";
import { FiBell, FiUser, FiShoppingCart } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { Link, usePage } from "@inertiajs/react";

export default function Navbar() {
    const { category, auth } = usePage().props;
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRefs = {
        shop: useRef(),
        blog: useRef(),
        user: useRef(),
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
        <nav className="bg-white shadow-md w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="text-2xl font-bold text-red-500">
                        Araonoz
                    </Link>
                </div>

                {/* Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link href="/" className="hover:text-red-500 transition">
                        Home
                    </Link>

                    {/* Shop */}
                    <div className="relative" ref={dropdownRefs.shop}>
                    <button
                        onClick={() => toggleDropdown("shop")}
                        className="flex items-center hover:text-red-500 transition"
                    >
                        Shop <FaAngleDown className="ml-1" />
                    </button>
                    {openDropdown === "shop" && (
                        <div className="absolute mt-2 w-48 bg-white rounded-md shadow-md py-2 z-50">
                            <Link href={route('shop')} className="block px-4 py-2 hover:bg-gray-100">shop</Link>
                            <Link href={route('orders.index')} className="block px-4 py-2 hover:bg-gray-100">track order</Link>
                            {/* {category.map(el=>(
                                <Link href={route('shop',el.id)} className="block px-4 py-2 hover:bg-gray-100" key={el.id}>{el.name}</Link>
                            ))} */}
                        
                        </div>
                    )}
                    </div>

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
                        <Link href={route('blog')} className="block px-4 py-2 hover:bg-gray-100">Tous</Link>
                        <Link href="" className="block px-4 py-2 hover:bg-gray-100">Guides</Link>
                        </div>
                    )}
                    </div>

                    <Link href="/contact" className="hover:text-red-500 transition">Contact</Link>
                </div>

                {/* Icons avec dropdown User */}
                <div className="flex items-center space-x-4">
                    <FiBell size={20} />
                    <FiShoppingCart size={20} />

                    {/* User dropdown */}
                    <div className="relative" ref={dropdownRefs.user}>
                    <button
                        onClick={() => toggleDropdown("user")}
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <FiUser size={20} />
                    </button>
                    {openDropdown === "user" && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                        {auth?.user ? (
                            <>
                            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                                Profile
                            </Link>
                            <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">
                                Settings
                            </Link>
                            <Link href="/logout" method="post" className="block px-4 py-2 hover:bg-gray-100">
                                Logout
                            </Link>
                            </>
                        ) : (
                            <>
                            <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
                                Login
                            </Link>
                            <Link href="/register" className="block px-4 py-2 hover:bg-gray-100">
                                Register
                            </Link>
                            </>
                        )}
                        </div>
                    )}
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
}
