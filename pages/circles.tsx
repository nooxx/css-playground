import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import styles from "../styles/circles.module.scss"
import React from "react";
import Seo from "../components/Seo";

const Circles: NextPageWithLayout = () => {
    return (
        <div className="w-screen h-screen overflow-hidden relative">
            <Seo title="Circles"/>
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
        </div>
    )
}

Circles.getLayout = page => <Layout>{page}</Layout>

export default Circles
