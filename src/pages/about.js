import React from "react";
import { Link } from "gatsby";

import Layout from '../components/laytout';

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Page</h1>
            <p>Bla bla bla</p>

            <p>Click <Link to="/contact">here</Link> to go to contact page</p>
        </Layout>
    )
}

export default AboutPage;