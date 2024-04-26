import React from 'react'
import { Product } from '@/interfaces';
import Image from "next/image";
import styles from '../best/BestCard.module.css'



interface Props {
    product: Product;
  }
export default function BestCard(props: Props) {
  return (
        <div className=" border rounded-md shadow hover:shadow-lg transition overflow-hidden ">
        <div>
    <div className={styles.image_card}>
        <Image
          src={props.product.imagePath}
          width={400}
          height={500}
          alt={props.product.name}
        />
        </div>
        <p className={styles.best_name}>
            {props.product.name}
          </p>
        <div className={styles.product_text}>
            <p className={styles.text1}>
            {props.product.price} $
          </p>
          <p>|</p>
          <p className={styles.text2}>
            {props.product.rate}
          </p>
        </div>

      </div>
      </div>
    );
  };
