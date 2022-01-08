import type {FunctionComponent} from "react";
import React, {useState} from 'react'
import Navbar from "./Navbar"
import Head from "next/head"
import {AppContext, AppContextInitialValue, AppContextType} from "../contexts/app-context";

const Layout: FunctionComponent = ({children}) => {
    const [appContext, setAppContext] = useState<AppContextType>(AppContextInitialValue)

    return (
        <>
            <Head>
                <title>CSS Playground</title>
                <meta name="description" content="CSS projects and experiments."/>
                <meta name="keywords" content="CSS, Arno Simon, projects"/>
            </Head>
            <AppContext.Provider value={{...appContext, setAppContext}}>
                <main className="min-h-screen bg-black relative">
                    {children}
                </main>
            </AppContext.Provider>
        </>
    )
}

export default Layout
