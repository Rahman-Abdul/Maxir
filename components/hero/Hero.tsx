import React from 'react'
import styles from './Hero.module.css';
import Image from 'next/image';

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className={styles.mainhero}>
    <div>
        <h1 className={styles.heroh1}>Discover and Find Your Own Fashion!</h1>
        <p className={styles.herop}> Explore our curated collection of stylish
        clothing and accessories tailored to your unique taste.</p>
        <button className={styles.herobutton}>EXPLORE NOW</button>
    </div>
    <div className={styles.heroImage}>
    <Image src="./hero.svg" alt="Follow us on Twitter" width={500} height={600} />
    </div>

    </div>
  )
}
