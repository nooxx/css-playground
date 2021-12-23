import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import styles from "../styles/squares.module.scss"
import Head from "next/head";
import React from "react";

const Squares: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Squares - CSS Playground</title>
            </Head>
            <div
                className={`transition ease-in duration-150 w-full max-w-screen-laptop mx-auto ${styles.container}`}>
                <div className={`gap-10 grid-cols-8 grid `}>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>

                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>

                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                    <div className={`${styles.rectangle}`}/>
                </div>

            </div>
        </>
    )
}

Squares.getLayout = page => <Layout>{page}</Layout>

export default Squares
