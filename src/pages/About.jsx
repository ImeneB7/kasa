import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import aboutBanner from '../assets/images/Image source 2.png'
import Collapse from "../components/Collapse";

    const collapseData = [
    { title: "Fiabilité", content:  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. "},
    { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."},
    { title: "Service", content: ""},
    { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
];

const About = () => {
    return (
        <Layout>
            <main>
                <Banner image={aboutBanner}></Banner>
                <section>
                    {collapseData.map((item, index)=> (
                        <Collapse key={index} title={item.title} content={item.content}></Collapse>
                    ))}
                    
                </section>
            </main>
        </Layout>
    )
}

export default About;