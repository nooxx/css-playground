import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import React from "react";
import Cube3d from "../components/Cube3d";
import Seo from "../components/Seo";

const Cube: NextPageWithLayout = () => {
    return (
        <>
            <Seo title="Cubes"/>
            <div className={`min-h-screen flex items-center justify-center`} style={{perspective: 600}}>
                <Cube3d/>
            </div>
        </>
    )
}

Cube.getLayout = page => <Layout>{page}</Layout>

export default Cube
