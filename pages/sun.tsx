import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import styles from "../styles/sun.module.scss"
import React from "react";
import Seo from "../components/Seo";
import ProjectHeader from "../components/ProjectHeader";

const Sun: NextPageWithLayout = () => {
    return (
        <div className="">
            <Seo title="Sun"/>
            <ProjectHeader title="Sun" date="Nov 2021" className="mb-48"/>
            <div className="relative flex items-center justify-center">
                <div className={styles.sun}>
                    <div className={styles.sun__heart}/>
                    <div className={styles.sun__cornerContainer}>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
            </div>
        </div>
    )
}

Sun.getLayout = page => <Layout>{page}</Layout>

export default Sun
