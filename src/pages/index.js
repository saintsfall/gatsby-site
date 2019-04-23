import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/laytout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello</h1>
            <h2>I'm Caio, a starter frontend developer</h2>

            <p>Need a developer? <Link>Contact me!</Link></p>
        </Layout>
    )
}

export default IndexPage;