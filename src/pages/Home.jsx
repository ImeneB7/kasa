import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import homeBanner from '../assets/images/Image source 1.png';

const Home = () => {
    return (
        <Layout>
            <main>
                <Banner image={homeBanner}></Banner>
            </main>
        </Layout>
    )
}

export default Home;