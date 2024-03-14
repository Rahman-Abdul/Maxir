import styles from './page.module.css';
import Navbar from './nav/Navbar';
import Hero from './hero/Hero';
import Footer from './footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
        <Hero/>
      <Footer/>
    </div>
  )
}

