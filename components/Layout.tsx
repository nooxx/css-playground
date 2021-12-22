import type {FunctionComponent} from "react";
import React from 'react'
import Navbar from "./Navbar";

const Layout: FunctionComponent = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="relative min-h-[calc(100vh-81px)] overflow-hidden grid bg-black place-items-center">
                {children}
            </main>
        </div>
    )
}

export default Layout
