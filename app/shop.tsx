import React, { ReactElement } from 'react'
import BestCard from './best/BestCard'
import { bestProducts } from '@/data';

interface Props {

}

export default function Shop({}: Props): ReactElement {
    return (
        <div>
            <BestCard product={bestProducts[0]} />
            <h1>The philosophy of life and logic</h1>
        </div>
    )
}
