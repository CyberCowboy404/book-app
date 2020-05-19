import fs from 'fs'
import path from 'path'
import IFeaturedCategory from '../interfaces/IFeaturedCategories';

const featuredProducts = path.join(process.cwd(), 'data', 'FeaturedCategories.json')

export default function GetProductsForMainPage(): IFeaturedCategory[] {
    const products: IFeaturedCategory[] = JSON.parse(fs.readFileSync(featuredProducts, 'utf8'));

    return products
}