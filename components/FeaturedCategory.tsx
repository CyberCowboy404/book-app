/* eslint-disable react/no-array-index-key */
import React from 'react';
import Link from 'next/link';
import { IProductAttributes } from '../interfaces/IProductAttributes';
import ICategory from '../interfaces/ICategory';
import ProductVertical from './ProductVertical';

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
          <ProductVertical key={i} product={product} />
        ))}
      </div>
    </div>
  );
}
