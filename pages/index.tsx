import Head from 'next/head'
import Layout from '../components/layout';
import FeaturedCategory from '../components/FeaturedCategory';
import { GetStaticProps } from 'next'
import GetProductsForMainPage from '../lib/GetProductsForMainPage';
import IFeaturedCategory from '../interfaces/IFeaturedCategories';

export default function Home({ products }: { products: IFeaturedCategory[] }) {
  console.log(products);
  return (
    <Layout>
      <Head>
        <title>Shop cheap books online.</title>
      </Head>
      {products.map((product: IFeaturedCategory, i: number) => {
        return <FeaturedCategory key={i} category={product.name} products={product.products}></FeaturedCategory>
      })
      }
    </Layout >
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products: IFeaturedCategory[] = GetProductsForMainPage(config.mainPageCategories, config.mainCategoryPostCount);
  return {
    props: {
      products
    }
  }
}
