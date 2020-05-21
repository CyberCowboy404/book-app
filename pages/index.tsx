import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Layout from '../components/common/Layout';
import FeaturedCategory from '../components/FeaturedCategory';
import IFeaturedCategory from '../interfaces/IFeaturedCategories';
import FeaturedProducts from '../data/FeaturedCategories';

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
  const products: IFeaturedCategory[] = FeaturedProducts;
  return {
    props: {
      products,
    },
  };
};
