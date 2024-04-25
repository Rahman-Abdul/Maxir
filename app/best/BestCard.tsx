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
        <div className={styles.product_text}>
          <p className="text-center text-slate-600">
            {props.product.name}
          </p>
          <p>|</p>
          <p className="text-center text-slate-600">
            {props.product.price} $
          </p>
        </div>
      </div>
      </div>
    );
  };
