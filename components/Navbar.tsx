import React from 'react'
import Link from "next/link";
import {HomeIcon} from "./Icons";
import {useRouter} from "next/router";

const LINKS = [
    {
        pathname: '/',
        content: (
            <>
                <HomeIcon className="w-8"/>
                Home
            </>
        )
    },
    {
        pathname: '/sun',
        content: 'Sun'
    }
]

const Navbar = () => {
    const router = useRouter()

    return (
        <nav
            className="flex items-center gap-x-8 p-6 bg-black text-white text-lg font-semibold border-b border-b-white">
            {LINKS.map((link, index) => (
                <Link href={link.pathname} key={`nav-link-${index}`}>
                    <a className={`flex items-center gap-x-3 hover:text-red-500 ${router.pathname === link.pathname ? 'text-red-500' : ''}`}>
                        {link.content}
                    </a>
                </Link>
            ))}
        </nav>
    )
}

export default Navbar
