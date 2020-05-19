import { ISlug } from '../interfaces/ISlug';
import slugs from '../data/slugs';

export default function GetAllProductsSlugs(): ISlug[] {
  return slugs.map((slug: string) => ({ params: { slug } }));
}
