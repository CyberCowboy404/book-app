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

const basketItems: IProductAttributes[] = [books[0], books[2], books[15]];

export default function Basket() {
  const itemsExists: boolean = true;

  let content: JSX.Element | JSX.Element[];

  if (itemsExists) {
    content = basketItems.map((product: IProductAttributes, i: number) => (
      <section key={i}>
        <div>
          <ProductVertical product={product} />
          <button type="button">Remove</button>
        </div>
        <div>
          <select name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <ShowCurrency price={product.price} currency={product.currency} />
        </div>
        <Link href="/checkout/order">
          <button type="button">Go to checkout</button>
        </Link>
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
      <section>
        {content}
      </section>
      <aside>
        <ShippingOptions />
        <TotalCosts />
      </aside>
    </Layout>
  );
}
