import React from 'react';
import { Link } from 'gatsby';

// import './header.module.scss';
import headerStyles from './header.module.scss';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1><Link to="/" className={headerStyles.title}>SaintsFall</Link></h1>
            <h2>Front End Developer</h2>
            <nav>
                <ul className={headerStyles.list}>
                    <li>
                        <Link to="/" 
                            className={headerStyles.link}
                            activeClassName={headerStyles.active}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" 
                            className={headerStyles.link}
                            activeClassName={headerStyles.active}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" 
                            className={headerStyles.link}
                            activeClassName={headerStyles.active}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" 
                            className={headerStyles.link}
                            activeClassName={headerStyles.active}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;