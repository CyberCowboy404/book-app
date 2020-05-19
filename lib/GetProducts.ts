import fs from 'fs'
import path from 'path'
import IFeaturedCategory from '../interfaces/IFeaturedCategories';
import { IProductAttributes } from '../interfaces/IProductAttributes';


export function GetFeaturedProducts(): IFeaturedCategory[] {
    const productsPath = path.join(process.cwd(), 'data', 'FeaturedCategories.json')
    const products: IFeaturedCategory[] = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    return products
}

export function GetAllProducts(fileName: string): IProductAttributes[] {
    const productsPath = path.join(process.cwd(), 'data', 'book.json')
    const products: IProductAttributes[] = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    return products
}