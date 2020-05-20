import React from 'react';
import Link from 'next/link';
import { IProductAttributes } from '../interfaces/IProductAttributes';

export default function ProductVertical(props: { product: IProductAttributes }) {
  const { product } = props;
  return (
    <Link href={`product/${product.slug}`}>
      <div>
        <img src={product.photos[0].url} alt={product.photos[0].alt} />
        <h3>{product.title}</h3>
        <h4>{product.author}</h4>
        <p>{product.price}</p>
      </div>
    </Link>
  );
}
