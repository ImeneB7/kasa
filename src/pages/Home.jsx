import React from "react";
import Banner from "../components/Banner";
import homeBanner from '../assets/images/Image source 1.png';
import Gallery from "../components/Gallery";

const Home = () => {
    return (
            <main>
                <Banner image={homeBanner} texte="Chez vous, partout et ailleurs"></Banner>
                <Gallery></Gallery>
            </main>
    )
}

export default Home;