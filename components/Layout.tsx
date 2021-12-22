import type {FunctionComponent} from "react";
import React from 'react'
import Navbar from "./Navbar"
import Head from "next/head"

const Layout: FunctionComponent = ({children}) => {
    return (
        <>
            <Head>
                <title>CSS Playground</title>
                <meta name="description" content="CSS projects and experiments."/>
                <meta name="keywords" content="CSS, Arno Simon, projects"/>
            </Head>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <main className="relative min-h-[calc(100vh-81px)] overflow-hidden grid bg-black place-items-center">
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
