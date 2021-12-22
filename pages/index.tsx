import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";

const Index: NextPageWithLayout = () => {
    return (
        <div>
            Index page
        </div>
    )
}

Index.getLayout = page => <Layout>{page}</Layout>

export default Index
