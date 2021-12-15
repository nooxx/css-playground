import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";

const Home: NextPageWithLayout = () => {
    return (
        <div>
            Home page
        </div>
    )
}

Home.getLayout = page => <Layout>{page}</Layout>

export default Home
