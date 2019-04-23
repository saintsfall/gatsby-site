import React from 'react';


//Components
import Header from './header';
import Footer from './footer';

//Styles
import '../styles/main.scss';

const Layout = (props) => {
    return (
        <div>
            <Header />
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout