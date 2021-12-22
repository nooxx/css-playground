import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import styles from "../styles/sun.module.scss"

const Sun: NextPageWithLayout = () => {
    return (
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
    )
}

Sun.getLayout = page => <Layout>{page}</Layout>

export default Sun
