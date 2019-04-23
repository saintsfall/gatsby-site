import React from 'react';


//Components
import Header from './header';
import Footer from './footer';

//Styles
import '../styles/main.scss';
import layoutStyles from './layout.module.scss';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                    {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout