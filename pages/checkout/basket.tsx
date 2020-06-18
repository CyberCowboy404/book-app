/* eslint-disable react/no-array-index-key */
import React from 'react';
import Head from 'next/head';
import Layout from '../../Components/Common/Layout';
import ShippingOptions from '../../Components/Checkout/ShippingInfo';
import TotalCosts from '../../Components/Checkout/TotalCosts';
import styles from './basket.module.less';
import BasketContent from '../../Components/Checkout/Basket/BasketContent';

export default function Basket() {
  return (
    <Layout>
      <Head>
        <title>Your basket</title>
      </Head>
      <div className={styles.basketWrapper}>
        <BasketContent />
        <aside>
          <ShippingOptions />
          <TotalCosts />
        </aside>
      </div>
    </Layout>
  );
}
