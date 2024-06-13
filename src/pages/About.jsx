import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import aboutBanner from '../assets/images/Image source 2.png'


const About = () => {
    return (
        <Layout>
            <main>
                <Banner image={aboutBanner}></Banner>
            </main>
        </Layout>
    )
}

export default About;