import React from 'react'
import { bestProducts } from '@/data';
import styles  from  './Sale.module.css'
import ProductCard from './ProductCard';

type Props = {}

export default function Products({}: Props) {
  return (
    <div className={styles.our_products}>
        {bestProducts.map((product) =>(
            <ProductCard key={product.id} product={product} />
        ))}
        </div>
  )
}
