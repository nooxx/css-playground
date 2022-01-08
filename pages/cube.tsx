import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import React from "react";
import Cube3d from "../components/Cube3d";
import Seo from "../components/Seo";
import ProjectHeader from "../components/ProjectHeader";

const Cube: NextPageWithLayout = () => {
    return (
        <>
            <Seo title="Cubes"/>
            <ProjectHeader title="Cube" date="Jan 2022" className="mb-48"/>
            <div className={`flex items-center justify-center`} style={{perspective: 600}}>
                <Cube3d/>
            </div>
        </>
    )
}

Cube.getLayout = page => <Layout>{page}</Layout>

export default Cube
