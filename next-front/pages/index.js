import Head from "next/head";
import Layout from "../components/Layout";
import DataRow from "../components/data-row";

const Index = (props) => {

    if (props.error) return <div>failed to load!!</div>

    return (
        <Layout>
            <Head>
                <title>Store NextJS</title>
            </Head>
            <h1>Store</h1>
            <br/>
            <br/>
            <DataRow products={props.products.products}></DataRow>
        </Layout>
    );
};

Index.getInitialProps = async (ctx) => {
    try {
        const res = await fetch("http://localhost:3001/product");
        const resJSON = await res.json();
        return {products: resJSON.detail};
    } catch (error) {
        return {error};
    }
};

export default Index;