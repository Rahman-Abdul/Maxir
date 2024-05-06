import styles from './page.module.css';
import Hero from '../components/hero/Hero';
import { bestProducts } from '@/data';
import BestCard from '../components/best/BestCard';
import Products from '../components/products/Products';


export default function Home() {
  return (
    <div className={styles.container}>
        <Hero/>
        <h1 className={styles.product_h1}> Best Selling</h1>
        <p className={styles.product_p}>Get in on the trend with our curated selection of best-selling styles.</p>
      <div className={styles.flex}>
        {bestProducts.slice(0, 3).map((product) =>(
            <BestCard key={product.id} product={product} />
        ))}
        </div>
        <p className={styles.product_b}>See all <span>&#8594;</span>
          </p>
            <h1 className={styles.product_h1} >Our Products</h1>
            <ul className={styles.our_products}>
              <li>SALE</li>
              <li>HOT</li>
              <li>NEW ARRIVALS</li>
              <li>ACCESSORIES</li>
            </ul>
            <Products/>
          </div>
  )
}

