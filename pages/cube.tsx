import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import React from "react";
import Cube3d from "../components/Cube3d";
import Seo from "../components/Seo";

const Cube: NextPageWithLayout = () => {
    return (
        <>
            <Seo title="Cubes"/>
            <div
                className={`transition ease-in duration-150 w-full max-w-screen-laptop mx-auto bg-black`}>
                <div className={`flex gap-32 flex-wrap items-center justify-center`} style={{perspective: 600}}>
                    <Cube3d/>
                </div>

            </div>
        </>
    )
}

Cube.getLayout = page => <Layout>{page}</Layout>

export default Cube
