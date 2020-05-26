import React from 'react';
import Link from 'next/link';
import { IProductAttributes } from '../interfaces/IProductAttributes';
import ShowCurrency from './ShowCurrency';

export default function ProductVertical(props: { product: IProductAttributes }) {
  const { product } = props;
  return (
    <Link href={`product/${product.slug}`}>
      <div className="product-vertical">
        <div className="image-wrap">
          <img src={product.photos[0].url} alt={product.photos[0].alt} />
        </div>
        <div className="product-info">
          <div className="info-wrap">
            <h3>{product.title}</h3>
            <h4>{product.author}</h4>
            <p>
              <ShowCurrency price={product.price} currency={product.currency} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
