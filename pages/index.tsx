import Head from 'next/head'
import Layout from '../components/layout';
import FeaturedCategory from '../components/FeaturedCategory';
import { GetStaticProps } from 'next'
import { GetFeaturedProducts } from '../lib/GetProducts';
import IFeaturedCategory from '../interfaces/IFeaturedCategories';

export default function Home({ products }: { products: IFeaturedCategory[] }) {
  return (
    <Layout>
      <Head>
        <title>Shop cheap books online.</title>
      </Head>
      {products.map((product: IFeaturedCategory, i: number) => {
        return <FeaturedCategory key={i} category={product.category} products={product.products}></FeaturedCategory>
      })
      }
    </Layout >
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products: IFeaturedCategory[] = GetFeaturedProducts();
  return {
    props: {
      products
    }
  }
}
