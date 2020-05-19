import { ISlug } from '../interfaces/ISlug'
import slugs from '../data/slugs'

export function GetAllProductsSlugs(): ISlug[] {
    return slugs.map((slug: string) => {
        return {
            params: {
                slug
            }
        }
    });
}