import { IProductAttributes } from '../interfaces/IProductAttributes';
import ICategory from '../interfaces/ICategory';
import Link from 'next/link'

export default function FeaturedCategory(props: { category: ICategory, products: IProductAttributes[] }) {

    return <div>
        <Link href={{ pathname: "/search", query: { category: props.category.slug } }}>
            <h2>{props.category.name}</h2>
        </Link>
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