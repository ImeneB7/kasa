import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import homeBanner from '../assets/images/Image source 1.png';

const Home = () => {
    return (
        <Layout>
            <main>
                <Banner image={homeBanner} texte="Chez vous, partout et ailleurs"></Banner>
            </main>
        </Layout>
    )
}

export default Home;