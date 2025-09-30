import { Link } from '@inertiajs/react';
import { CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";




export default function NavBar(){
    return <>
    {/*  */}
    <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <button
                        type="button"
                        command="--toggle"
                        commandfor="mobile-menu"
                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                    >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            data-slot="icon"
                            aria-hidden="true"
                            className="size-6 in-aria-expanded:hidden"
                        >
                        <path
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            data-slot="icon"
                            aria-hidden="true"
                            className="size-6 not-in-aria-expanded:hidden"
                        >
                        <path
                            d="M6 18 18 6M6 6l12 12"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex shrink-0 items-center">
                        <h1 className='text-xl'>Araonoz</h1>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                        {/* Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
                        <Link
                            href={route('home')}
                            aria-current="page"
                            className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                        >
                            Home
                        </Link>
                        <Link
                            href={route('shop')}
                            className="flex items-end rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                        >
                            Shop <FaAngleDown />
                        </Link>
                        <Link
                            href={route('blog')}
                            className="flex items-end rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                        >
                            Blog <FaAngleDown />
                        </Link>
                        <Link
                            href="#"
                            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                        >
                            contact
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                    <el-dropdown className="relative ml-3">
                        <button className="relative items-end text-white flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                                className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                            />
                            <FaAngleDown />
                        </button>
                        <el-menu
                            anchor="bottom end"
                            popover=""
                            className="w-48 origin-top-right gap-4 rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                            >
                                Your profile
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                            >
                                Settings
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                            >
                                Sign out 
                            </a>
                        </el-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
        <el-disclosure id="mobile-menu" hidden="" className="block sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
            {/* Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
            <a
            href={route('home')}
            aria-current="page"
            className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
            >
                Home
            </a>
            <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
                Shop <FaAngleDown />
            </a>
            <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
                Blog <FaAngleDown />
            </a>
            <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
                Contact
            </a>
        </div>
        </el-disclosure>
    </nav>
</>

    
}