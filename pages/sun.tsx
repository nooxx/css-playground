import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import styles from "../styles/sun.module.scss"
import Head from "next/head";
import React from "react";

const Sun: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Sun - CSS Playground</title>
            </Head>
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
        </>
    )
}

Sun.getLayout = page => <Layout>{page}</Layout>

export default Sun
