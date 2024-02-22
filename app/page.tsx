import styles from './page.module.css';
import Navbar from './nav/Navbar';
import Hero from './hero/Hero';
import Footer from './footer/Footer';

export default function Home() {
  return (
    <div>
      <Navbar/>
        <Hero/>
      <h1>Hello there</h1>
      <Footer/>
    </div>
  )
}
