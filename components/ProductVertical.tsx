import React from 'react';
import Link from 'next/link';
import { IProductAttributes } from '../interfaces/IProductAttributes';
import ShowCurrency from './ShowCurrency';
import styles from './ProductVertical.module.less';

export default function ProductVertical(props: { product: IProductAttributes }) {
  const { product } = props;
  return (
    <Link href="product/[slug]" as={`product/${product.slug}`}>
      <div className={styles.productVertical}>
        <div className={styles.imageWrap}>
          <img src={product.photos[0].url} alt={product.photos[0].alt} />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.infoWrap}>
            <div className={styles.productTitleWrap}>
              <h3 className={styles.productTitle}>{product.title}</h3>
            </div>
            <h4 className={styles.author}>{product.author}</h4>
            <ShowCurrency price={product.price} currency={product.currency} />
          </div>
        </div>
      </div>
    </Link>
  );
}
