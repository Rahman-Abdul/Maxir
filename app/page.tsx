import styles from './page.module.css';
import Navbar from './nav/Navbar';
import Hero from './hero/Hero';
import Footer from './footer/Footer';
import { bestProducts } from '@/data';
import BestCard from './best/BestCard';


export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
        <Hero/>
        <h1 className={styles.product_h1}> Best Selling</h1>
      <div className={styles.flex}>
        {bestProducts.slice(0, 3).map((product) =>(
            <BestCard key={product.id} product={product} />
        ))}
        </div>
      <Footer/>
    </div>
  )
}

