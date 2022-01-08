import type {FunctionComponent} from "react";
import React from 'react'
import Head from "next/head"
import {AppContextProvider} from "../contexts/app-context";

const Layout: FunctionComponent = ({children}) => {
    return (
        <>
            <Head>
                <title>CSS Playground</title>
                <meta name="description" content="CSS projects and experiments."/>
                <meta name="keywords" content="CSS, Arno Simon, projects"/>
            </Head>
            <AppContextProvider>
                <main className="min-h-screen bg-black relative">
                    {children}
                </main>
            </AppContextProvider>
        </>
    )
}

export default Layout
