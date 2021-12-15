import type {FunctionComponent} from "react";
import React from 'react'
import Navbar from "./Navbar";

const Layout: FunctionComponent = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="relative max-w-screen-desktop mx-auto w-full px-4 tablet:px-8">
                {children}
            </main>
        </div>
    )
}

export default Layout
