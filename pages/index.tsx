import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import FeaturedCategory from '../components/FeaturedCategory';
import { GetFeaturedProducts } from '../lib/GetProducts';
import IFeaturedCategory from '../interfaces/IFeaturedCategories';

export default function Home({ products }: { products: IFeaturedCategory[] }) {
  return (
    <Layout>
      <Head>
        <title>Shop cheap books online.</title>
      </Head>
      {products.map((product: IFeaturedCategory) => (
        <FeaturedCategory
          key={product.category.categoryId}
          category={product.category}
          products={product.products}
        />
      ))}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products: IFeaturedCategory[] = GetFeaturedProducts();
  return {
    props: {
      products,
    },
  };
};
