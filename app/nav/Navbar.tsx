import React from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css'

type Props = {}

const Navbar = () => {

 return (
    <nav className={styles.navbar}>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact</Link>
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
