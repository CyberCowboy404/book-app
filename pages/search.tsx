/* eslint-disable react/no-array-index-key */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/common/Layout';
import categories from '../data/categories';
import ICategory from '../interfaces/ICategory';
import ProductVertical from '../components/ProductVertical';
import { IProductAttributes } from '../interfaces/IProductAttributes';
import books from '../data/book';

export default function SearchPage() {
  const products: IProductAttributes[] = books;

  return (
    <Layout>
      <Head>
        <title>Find books</title>
      </Head>
      <section>
        <h4>Found: 100</h4>
        <hr />
      </section>
      <section>
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
              {categories.map((category: ICategory) => (
                <Link key={category.categoryId} href={{ pathname: '/search', query: { category: category.slug } }}><span>{category.name}</span></Link>
              ))}
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
        <article>
          <section>
            {products.map((product: IProductAttributes, i: number) => (
              <ProductVertical key={i} product={product} />
            ))}
          </section>
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
        </article>
      </section>
    </Layout>
  );
}
