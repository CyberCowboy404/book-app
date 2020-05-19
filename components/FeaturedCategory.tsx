/* eslint-disable react/no-array-index-key */
import React from 'react';
import Link from 'next/link';
import { IProductAttributes } from '../interfaces/IProductAttributes';
import ICategory from '../interfaces/ICategory';

export default function FeaturedCategory(
  props: {
    category: ICategory, products: IProductAttributes[]
  },
) {
  const { category, products } = props;
  return (
    <div>
      <Link href={{ pathname: '/search', query: { category: category.slug } }}>
        <h2>{category.name}</h2>
      </Link>
      <div>
        {products.map((product: IProductAttributes, i: number) => (
          <Link key={i} href={`product/${product.slug}`}>
            <div>
              <img src={product.photos[0].url} alt={product.photos[0].alt} />
              <h3>{product.title}</h3>
              <h4>{product.author}</h4>
              <p>{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
