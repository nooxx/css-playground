import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import Head from "next/head";
import React from "react";
import Cube from "../components/Cube";

const Cubes: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Cubes - CSS Playground</title>
            </Head>
            <div
                className={`transition ease-in duration-150 w-full max-w-screen-laptop mx-auto bg-black`}>
                <div className={`flex gap-32 flex-wrap items-center justify-center`} style={{perspective: 600}}>
                    <div className="">
                        <Cube/>
                    </div>
                    <div className="">
                        <Cube/>
                    </div>
                    <div className="">
                        <Cube/>
                    </div>
                    <div className="">
                        <Cube/>
                    </div>
                    <div className="">
                        <Cube/>
                    </div>
                    <div className="">
                        <Cube/>
                    </div>
                    <div className="">
                        <Cube/>
                    </div>
                    <div className="">
                        <Cube/>
                    </div>
                </div>

            </div>
        </>
    )
}

Cubes.getLayout = page => <Layout>{page}</Layout>

export default Cubes
