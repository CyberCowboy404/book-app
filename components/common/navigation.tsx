import Link from 'next/link'
import IMenuLinks from '../../interfaces/IMenuLinks';

export default function Navigation() {
    const navigationLinks: IMenuLinks[] = [
        { name: 'New', url: 'new' },
        { name: 'Best Sellers', url: 'best-sellers' },
        { name: 'Fiction', url: 'fiction' },
        { name: 'Non-Fiction', url: 'non-fiction' },
        { name: 'Find a book', url: 'search' }];

    return (
        <nav>
            <ul>
                {navigationLinks.map((el: IMenuLinks, i: number) => {
                    return <li key={i}>
                        <Link href={'/search?category=' + el.url}>{el.name}</Link>
                    </li>
                })}
            </ul>
        </nav>
    );
}