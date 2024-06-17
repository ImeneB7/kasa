import React from "react";
import Layout from "../components/Layout";
import '../sass/_notfound404.scss';
import { Link } from "react-router-dom";

function NotFound404() {
    return (
        <Layout>
            <main className="main_error">
                <h1 className="main_error_404">404</h1>
                <p className="main_error_content">Oups! La page que vous demandez n'existe pas.</p>
                <Link className="main_error_link" to='/'>Retourner sur la page d'accueil</Link>
            </main>
        </Layout>
    )
}

export default NotFound404;