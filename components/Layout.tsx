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
                <div className="bg-black">
                    <main className="min-h-screen flex flex-col text-white relative py-10 max-w-screen-desktop mx-auto w-full px-4 tablet:px-8">
                        {children}
                    </main>
                </div>
            </AppContextProvider>
        </>
    )
}

export default Layout
