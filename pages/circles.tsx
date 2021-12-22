import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import styles from "../styles/circles.module.scss"
import Head from "next/head";
import React from "react";

const Circles: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Circles - CSS Playground</title>
            </Head>
            <div className={styles.circles}>
                <div className={styles.spiral}>
                    <div className={styles.spiral__circle}>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                    </div>
                    <div className={styles.spiral__inner}/>
                </div>

                <div className={styles.spiral}>
                    <div className={styles.spiral__circle}>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                    </div>
                    <div className={styles.spiral__inner}/>
                </div>

                <div className={styles.spiral}>
                    <div className={styles.spiral__circle}>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                    </div>
                    <div className={styles.spiral__inner}/>
                </div>

                <div className={styles.spiral}>
                    <div className={styles.spiral__circle}>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                    </div>
                    <div className={styles.spiral__inner}/>
                </div>

                <div className={styles.spiral}>
                    <div className={styles.spiral__circle}>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                    </div>
                    <div className={styles.spiral__inner}/>
                </div>

                <div className={styles.spiral}>
                    <div className={styles.spiral__circle}>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                    </div>
                    <div className={styles.spiral__inner}/>
                </div>

                <div className={styles.spiral}>
                    <div className={styles.spiral__circle}>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                    </div>
                    <div className={styles.spiral__inner}/>
                </div>

                <div className={styles.spiral}>
                    <div className={styles.spiral__circle}>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                    </div>
                    <div className={styles.spiral__inner}/>
                </div>

                <div className={styles.spiral}>
                    <div className={styles.spiral__circle}>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                        <div className={styles.spiral__circle__segment}/>
                    </div>
                    <div className={styles.spiral__inner}/>
                </div>
            </div>
        </>
    )
}

Circles.getLayout = page => <Layout>{page}</Layout>

export default Circles
