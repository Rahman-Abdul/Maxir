import React, { ReactElement } from 'react';
import styles from './Footer.module.css';


interface Props {

}

export default function Footer({}: Props): ReactElement {
    return (
        <div className={styles.mainfooter}>
            <div>
            <p>Social Media</p>
            <div>
            </div>
            </div>
            <div>
                <h3 className={styles.footerH1}>SHOP</h3>
               <p>Products</p>
               <p>Products</p>
               <p>Products</p>
               <p>Products</p>
            </div>
            <div>
                <h3>SHOP</h3>
               <p>Products</p>
               <p>Products</p>
               <p>Products</p>
               <p>Products</p>
            </div>
            <div>
                <h3>SHOP</h3>
            </div>
        </div>
    )
}
