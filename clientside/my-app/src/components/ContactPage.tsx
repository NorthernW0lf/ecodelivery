import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Contact.module.css';

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.breadcrumb}>
                <Link to="/">Main Page</Link> → <span>Contact</span>
            </div>
            <div className={styles.contactContent}>
                <div className={styles.imageContainer}>
                    <img src="/images/esb.jpg" alt="#" className={styles.image}/>
                </div>
                <div className={styles.contactForm}>
                    <h2>Do you need a consultation from our manager?</h2>
                    <p>Leave your contact details and we will call you back shortly.</p>
                    <form>
                        <input type="email" placeholder="Your Email" className={styles.input} required/>
                        <input type="text" placeholder="Your name" className={styles.input} required/>
                        <input type="tel" placeholder="Your phone number" className={styles.input} required/>
                        <button type="submit" className={styles.submitButton}>Send</button>
                    </form>
                </div>
            </div>
            <div className={styles.contactInfo}>
                <h2>Contacts</h2>
                <p>Address:</p>
                <p>+7 (747) 111-29-30</p>
                <p>info@ecodelivery.kz</p>
                <p>Astana</p>
            </div>
            <div className={styles.mapContainer}>
                <iframe
                    src="https://yandex.kz/map-widget/v1/?ll=71.398255%2C51.091531&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCBAQ3g0lMCAxJDI3MTMuNjg0NjgwLCA1MS4wOTEzMTAi&z=15"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    className={styles.map}
                    title="Location Map">
                </iframe>
            </div>

        </div>
    );
}

export default ContactPage;
