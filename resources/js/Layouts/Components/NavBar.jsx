import { Link } from '@inertiajs/react';
import { CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";


export default function NavBar(){
    return <nav className="flex max-sm:justify-evenly">
        <div>
            <h1>Aranoz.</h1>
        </div>
        <div>
            <Link>Home</Link>
            <Link>Shop</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
        </div>
        <div>
            <CiUser />
            <FaAngleDown />
        </div>
    </nav>
}