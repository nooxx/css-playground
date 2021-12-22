import React from 'react'
import Link from "next/link"
import {useRouter} from "next/router"
import {PROJECTS} from "../pages";
import {HomeIcon} from "./Icons";

const Navbar = () => {
    const router = useRouter()

    return (
        <div className="bg-black">
            <nav
                className="max-w-screen-desktop mx-auto w-full px-4 tablet:px-8 py-6 flex items-center gap-x-8 bg-black text-white text-lg font-semibold border-b border-b-white">
                <Link href="/">
                    <a className={`flex items-center gap-x-3 hover:text-red-500 ${router.pathname === '/' ? 'text-red-500' : ''}`}>
                        <HomeIcon className="w-8"/>
                        Home
                    </a>
                </Link>

                {PROJECTS.map((link, index) => (
                    <Link href={link.pathname} key={`nav-link-${index}`}>
                        <a className={`flex items-center gap-x-3 hover:text-red-500 ${router.pathname === link.pathname ? 'text-red-500' : ''}`}>
                            {link.content}
                        </a>
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default Navbar
