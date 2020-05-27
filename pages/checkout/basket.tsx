/* eslint-disable react/no-array-index-key */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/common/Layout';
import ProductVertical from '../../components/ProductVertical';
import EmptyBasket from '../../components/checkout/EmptyBasket';
import { IProductAttributes } from '../../interfaces/IProductAttributes';
import books from '../../data/book';
import ShowCurrency from '../../components/ShowCurrency';
import ShippingOptions from '../../components/checkout/ShippingInfo';
import TotalCosts from '../../components/checkout/TotalCosts';
import styles from './basket.module.less';

const basketItems: IProductAttributes[] = [books[0], books[2], books[15]];

export default function Basket() {
  const itemsExists: boolean = true;

  let content: JSX.Element | JSX.Element[];

  if (itemsExists) {
    content = basketItems.map((product: IProductAttributes, i: number) => (
      <section key={i} className={styles.basketItemWrapper}>
        <div className={styles.productWrapper}>
          <ProductVertical product={product} />
          <button type="button">Remove</button>
        </div>
        <div className={styles.quantityWrapper}>
          <select name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <ShowCurrency price={product.price} currency={product.currency} />
        </div>
        <div className={styles.checkoutLinkWrapper}>
          <Link href="/checkout/order">
            <button type="button">Go to checkout</button>
          </Link>
        </div>
      </section>
    ));
  } else {
    content = <EmptyBasket />;
  }

  return (
    <Layout>
      <Head>
        <title>Your basket</title>
      </Head>
      <div className={styles.basketWrapper}>
        <div className={styles.basketItemsWrapper}>
          {content}
        </div>
        <aside>
          <ShippingOptions />
          <TotalCosts />
        </aside>
      </div>
    </Layout>
  );
}
