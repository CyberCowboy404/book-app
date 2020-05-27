import React from 'react';
import Head from 'next/head';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ISlug } from '../../interfaces/ISlug';
import { IProductAttributes, IProductPhoto } from '../../interfaces/IProductAttributes';
import Layout from '../../components/common/Layout';
import books from '../../data/book';
import GetAllProductsSlugs from '../../lib/GetAllProductsSlug';
import style from './slug.module.less';

export default function Product({ product }: { product: IProductAttributes }) {
  let stock;

  if (product.stockAmount) {
    stock = (
      <div>
        <FaCheck />
        <span>
          In stock:
          {product.stockAmount}
        </span>
      </div>
    );
  } else {
    stock = (
      <div>
        <FaTimes />
        <span>Not in stock</span>
      </div>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className={style.productPageContainer}>
        <div>
          {product.photos.map((photo: IProductPhoto) => (
            <img
              key={photo.order}
              src={photo.url}
              alt={photo.alt}
            />
          ))}
        </div>
        <div className={style.infoWrapper}>
          <h1>{product.title}</h1>
          <h2>{product.author}</h2>
          <p>
            Country:
            {product.country}
          </p>
          <div>
            Rating:
            {product.rating}
          </div>
          <div>
            <div>
              <div>{product.type}</div>
              <div>
                <label htmlFor="quantity">
                  Quantity
                  <input id="quantity" type="text" />
                </label>
              </div>
              <div>{`${product.currency} ${product.price}`}</div>
            </div>
            <div>
              {product.pages}
              pages
            </div>
            {stock}
            <button type="button">Add to card</button>
          </div>
        </div>
        <div className={style.descriptionRow}>
          <h1>Description</h1>
          <div>{product.description}</div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: ISlug[] = GetAllProductsSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allProducts: IProductAttributes[] = books;
  const product: IProductAttributes = allProducts.filter((element: IProductAttributes) => {
    if (params && params.slug === element.slug) {
      return element;
    }
    return false;
  })[0];
  return {
    props: {
      product,
    },
  };
};
