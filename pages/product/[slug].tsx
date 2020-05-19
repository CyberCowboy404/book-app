import { GetStaticProps, GetStaticPaths } from 'next'
import { GetAllProductsSlugs } from '../../lib/GetAllProductsSlugs'
import { ISlug } from '../../interfaces/ISlug'
import { IProductAttributes, IProductPhoto } from '../../interfaces/IProductAttributes'
import { GetAllProducts } from '../../lib/GetProducts';
import Layout from '../../components/layout';
import Head from 'next/head'
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function Product({ product }: { product: IProductAttributes }) {
    let stock;

    if (product.stockAmount) {
        stock = <div>
            <FaCheck></FaCheck>
            <span>In stock: {product.stockAmount}</span>
        </div>;
    } else {
        <div>
            <FaTimes></FaTimes>
            <span>Not in stock</span>
        </div>
    }

    return <Layout>
        <Head>
            <title>{product.title}</title>
        </Head>
        <div>
            <div>
                <div>
                    {product.photos.map((photo: IProductPhoto, i: number) => {
                        return <img key={i} src={photo.url} alt={photo.alt} />
                    })}
                </div>
                <div>
                    <h2>{product.title}</h2>
                    <h2>{product.author}</h2>
                    <p>Country: {product.country}</p>
                    <div>
                        Rating: {product.rating}
                    </div>
                    <div>
                        <div>
                            <div>{product.type}</div>
                            <div>
                                <label htmlFor="quantity">Quantity</label>
                                <input id='quantity' type="text" />
                            </div>
                            <div>{`${product.currency} ${product.price}`}</div>
                        </div>
                        <div>
                            {product.pages} pages
                    </div>
                        {stock}
                        <button type="button">Add to card</button>
                    </div>
                </div>
            </div>
            <div>
                <h4>Description</h4>
                <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
            </div>
        </div>
    </Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: ISlug[] = GetAllProductsSlugs();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const allProducts: IProductAttributes[] = GetAllProducts('book');
    const product: IProductAttributes = allProducts.filter((product: IProductAttributes) => {
        if (params.slug === product.slug) {
            return product
        }
    })[0];
    return {
        props: {
            product
        }
    }
}