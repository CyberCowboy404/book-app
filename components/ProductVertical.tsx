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
            <div className="product-title-wrap">
              <h3 className="product-title">{product.title}</h3>
            </div>
            <h4 className="author">{product.author}</h4>
            <ShowCurrency price={product.price} currency={product.currency} />
          </div>
        </div>
      </div>
    </Link>
  );
}
