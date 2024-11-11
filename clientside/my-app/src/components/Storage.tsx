import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Storage.module.css';

const WarehouseServices = () => {
    return (
        <div className={styles.container}>
            <div className={styles.breadcrumb}>
                <Link to="/">Main Page</Link> → <span>Storage</span>
            </div>
            <h1 className={styles.header}>Warehouse services</h1>
            <div className={styles.servicesNav}>
                <button className={styles.serviceButton}>Fulfilment</button>
                <button className={styles.serviceButton}>3PL</button>
                <button className={styles.serviceButton}>Cross-docking</button>
                <button className={styles.serviceButton}>Responsible storage</button>
                <button className={styles.serviceButton}>Supply chain management</button>
            </div>
            <div className={styles.imageContainer}>
                <img alt="#" src="/images/Skladskaya.jpeg" className={styles.image} />
            </div>
            <section className={styles.fulfillment}>
                <h2 className={styles.sectionHeader}>Fulfilment</h2>
                <p className={styles.sectionDescription}>
                    Our company provides services related to packaging, labeling and logistics of goods to warehouses.
                </p>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <p>We process your request for cost calculation</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <p>We agree on the work and cost</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <p>Принимаем товары на нашем складе</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>4</div>
                        <p>We ship the delivery to the marketplace warehouse of your choice</p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionHeader}>3PL</h2>
                <p className={styles.sectionDescription}>
                    Comprehensive third party logistics service.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionHeader}>Cross-docking</h2>
                <div className={styles.sectionDescriptionRow}>
                    <p className={styles.description}>
                        Cross-docking is a logistics process in which products from a supplier or manufacturer are delivered directly to a customer, bypassing the long-term storage area. The cargo is kept in the transshipment warehouse for a minimum amount of time.
                    </p>
                    <p className={styles.description}>
                        We carry out acceptance and shipment of goods directly without long-term storage.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default WarehouseServices;
