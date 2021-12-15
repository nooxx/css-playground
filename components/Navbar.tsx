import React from 'react'
import Link from "next/link";
import {HomeIcon, ListIcon} from "./Icons";

const Navbar = () => {
    return (
        <nav className="flex items-center gap-x-8 p-6 bg-black text-white text-lg font-semibold mb-8">
            <Link href="/">
                <a className="flex items-center gap-x-3 hover:text-red-500">
                    <HomeIcon className="w-8"/>
                    Home
                </a>
            </Link>
            <Link href="/todo">
                <a className="flex items-center gap-x-3 hover:text-red-500">
                    <ListIcon className="w-8"/>
                    Todo
                </a>
            </Link>
        </nav>
    )
}

export default Navbar
