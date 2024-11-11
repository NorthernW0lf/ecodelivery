import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CompanyInfo.module.css';
import TheFooter from './TheFooter';

const CompanyInfo = () => {
    return (
        <div className={styles.company__info}>
            <nav className={styles.breadcrumb}>
                <Link to="/">Main Page</Link> → <span>About</span>
            </nav>
            <h1 className={styles.title}>Smart Delivery Solution</h1>
            <p className={styles.subtitle}>
                WE BUILD A BUSINESS BASED ON QUALITY SERVICE, INNOVATION AND AN ENVIRONMENTAL APPROACH
            </p>
            <div className={styles.description}>
                <p>
                    We are a young transport and forwarding company with a long history. We began delivering our first orders in 2024.
                    To date, a team of strong managers has been formed, capable of solving the most complex and individual requests of our clients.
                </p>
                <p>
                    We provide services for B2B and B2C segments in the following areas: project logistics, address delivery for e-commerce, office and apartment moves, railway and mainline transportation.
                </p>
                <p>
                    We will be glad to see you among our clients and partners!
                </p>
            </div>
        </div>
    );
};

export default CompanyInfo;
