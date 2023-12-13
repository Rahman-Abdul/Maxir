import React from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            0Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
