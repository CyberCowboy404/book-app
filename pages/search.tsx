/* eslint-disable react/no-array-index-key */
import React from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import Layout from '../components/common/Layout';
import categories from '../data/categories';
import ICategory from '../interfaces/ICategory';
import ProductVertical from '../components/ProductVertical';
import { IProductAttributes } from '../interfaces/IProductAttributes';
import books from '../data/book';
import styles from './search.module.less';

export default function SearchPage() {
  const products: IProductAttributes[] = books;

  return (
    <Layout>
      <Head>
        <title>Find books</title>
      </Head>
      <div>
        <h4>Found: 100</h4>
        <hr />
      </div>
      <div className={styles.sarchPageWrapper}>
        <aside>
          <form>
            <div>
              <h4>Search</h4>
              <input type="text" />
            </div>
            <div>
              <h4>Sort by</h4>
              <select name="sort" id="sortBy">
                <option value="">Option</option>
                <option value="price_hight">Price (hight to low)</option>
                <option value="price_low">Price (low to hight)</option>
                <option value="date_new">Publication Date (new to old)</option>
                <option value="date_old">Publication Date (old to new)</option>
              </select>
            </div>
            <div>
              <h4>Choose category</h4>
              <ul>
                {categories.map((category: ICategory) => (
                  <li key={category.categoryId}>
                    <button type="button">{category.name}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div>
                <span>$</span>
                <input type="number" />
              </div>
              <span>to</span>
              <div>
                <span>$</span>
                <input type="number" />
              </div>
              <button type="submit">Find</button>
            </div>
            <div>
              {Array(4).map((el: null, i: number) => (
                <span>{i}</span>
              ))}
            </div>
          </form>
        </aside>
        <div>
          <div className={styles.searchItemsWrapper}>
            {products.map((product: IProductAttributes, i: number) => (
              <ProductVertical key={i} product={product} />
            ))}
          </div>
          <nav>
            <ul>
              <li>
                1
              </li>
              <li>
                2
              </li>
              <li>
                3
              </li>
              <li>
                4
              </li>
              <li>
                5
              </li>
              <li>
                6
              </li>
              <li>
                7
              </li>
              <li>
                8
              </li>
            </ul>
            <button type="button">Prev</button>
            <button type="button">Next</button>
          </nav>
        </div>
      </div>
    </Layout>
  );
}
