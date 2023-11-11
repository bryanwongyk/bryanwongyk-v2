import '../styles/global.css';
import Layout from "../app/containers/Layout/Layout";

export default function App({ Component, pageProps }: any) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>;
}
