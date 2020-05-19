import { IProductAttributes } from '../interfaces/IProductAttributes';
import Link from 'next/link'

export default function FeaturedCategory(props: { category: string, products: IProductAttributes[] }) {
    console.log('props: ', props.products[0].slug);

    return <div>
        <h2>{props.category}</h2>
        <div>
            {props.products.map((product: IProductAttributes, i: number) => {
                return <Link key={i} href={product.slug}>
                    <div>
                        <img src={product.photos[0].url} alt={product.photos[0].alt} />
                        <h3>{product.title}</h3>
                        <h4>{product.author}</h4>
                        <p>{product.price}</p>
                    </div>
                </Link>
            })}
        </div>
    </div>
}