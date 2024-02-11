import React from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css'
import Image from 'next/image';

type Props = {}

const Navbar = () => {

 return (
    <nav className={styles.navbar}>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <Link href="/"><Image src="./Rivo.svg" alt='rivo' width={94} height={59}/></Link>
        </li>
      </ul>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
        <Link className={styles.linkt} href="/about">HOME</Link>
        </li>
        <li className={styles.navItem}>
        <Link className={styles.linkt} href="/about">SHOP</Link>
        </li>
        <li className={styles.navItem}>
        <Link className={styles.linkt} href="/about">FEATURES</Link>
        </li>
        <li className={styles.navItem}>
        <Link className={styles.linkt} href="/about">CONTACT</Link>
        </li>
      </ul>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
 );
};

export default Navbar;
