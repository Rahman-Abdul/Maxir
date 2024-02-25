import React, { ReactElement } from 'react';
import styles from './Footer.module.css';
import Contact from '../forms/Contact';


interface Props {

}

export default function Footer({}: Props): ReactElement {
    return (
        <div className={styles.mainfooter}>
             <div className={styles.centeredContent}>
                <h1 className={styles.title}>RIVO</h1>
            <p>Social Media</p>
            <div>
            </div>
            </div>
            <div className={styles.centeredContent}>
                <h3>SHOP</h3>
               <p>Products</p>
               <p>Overview</p>
               <p>Pricing</p>
               <p>Releases</p>
            </div>
            <div className={styles.centeredContent}>
            <h3>COMPANY</h3>
               <p>About us</p>
               <p>Contact</p>
               <p>News</p>
               <p>Support</p>
            </div>
            <div className={styles.centeredContent}>
            <h3>STAY UP TO DATE</h3>
            <Contact/>
            </div>
        </div>
    )
}
