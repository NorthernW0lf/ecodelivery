import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Transport.module.css';
import TheFooter from './TheFooter';

export default function TransportServices() {
    return (
        <div className={styles.container}>
            <nav className={styles.breadcrumb}>
                <Link to="/">Main Page</Link> → <span>Transporting Service</span>
            </nav>

            <h1 className={styles.title}>Transporting Service</h1>

            <div className={styles.tabs}>
                <button className={styles.tab}>Product E Commerce</button>
                <button className={styles.tab}>Automobile cargo transportation</button>
                <button className={styles.tab}>Rail transportation</button>
            </div>

            <div className={styles.content}>
                <img src="/images/track.jpg" alt="#" className={styles.image} />
                <div className={styles.info}>
                    <p>Delivery geography:</p>
                    <ul>
                        <li>Astana and Aqmola audani</li>
                        <li>Almaty and Almaty audani</li>
                        <li>Oskemen and VKO</li>
                        <li>Karagandy audani</li>
                    </ul>

                    <p>We have 24 vehicles in our own fleet:</p>
                    <ul>
                        <li>Газель Бизнес, 1 шт. 2017 year</li>
                        <li>Газель Некст, 3 шт. 2019 года, 13 шт. 2021 year</li>
                        <li>Газель нового поколения NN, 4 шт. 2021 year</li>
                        <li>Renault Kangoo Z.E., 1 шт. 2018 года на электрической тяге</li>
                        <li>Citroen e Jumpy, 2 шт. 2021 года на электрической тяге</li>
                    </ul>
                </div>
            </div>

            <section className={styles.ecommerceSection}>
                <h2>Product E-Commerce</h2>
                <p>
                    E-commerce (electronic commerce) is the sale of goods or services via the Internet.
                    It is an analogue of a store in a shopping mall, available online.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.callCourier}>Call a courier</button>
                </div>
            </section>

            <section className={styles.railContainer}>
                <h2 className={styles.railTitle}>Rail transportation</h2>
                <div className={styles.railContent}>
                    <div className={styles.railColumn}>
                        <p>
                            Rail transportation helps to deliver cargo to the most remote and hard-to-reach places of our country, which is a significant advantage over air transportation. Rail transportation is gaining more and more popularity among customers every year.
                        </p>
                    </div>
                    <div className={styles.railColumn}>
                        <p>
                            Delivery of absolutely all dimensions is possible. The cost of cargo delivery depends on the direction and parameters of the transported goods (weight and volume). To coordinate the transportation of goods that require special conditions, it is necessary to provide:
                        </p>
                        <ul className={styles.railList}>
                            <li>Safety Data Sheet</li>
                            <li>Relevant certificates for the cargo with information on its characteristics, storage and transportation conditions</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
