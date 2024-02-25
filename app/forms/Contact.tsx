import React, { ReactElement } from 'react'
import styles from './Contact.module.css';

interface Props {

}

export default function Contact({}: Props): ReactElement {
    return (
        <div className={styles.mainContact}>
            <form>
        <input className={styles.input} type='email' name='user_email' placeholder='Enter your email'/><button className={styles.b}>SUBMIT</button>
            </form>
        </div>
    )
}
