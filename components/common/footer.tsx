import IMenuLinks from '../../interfaces/menu-links';
import Link from 'next/link';

export default function Footer() {
    const links: IMenuLinks[] = [
        { name: 'Terms of use', url: 'terms-of-use' },
        { name: 'Privacy Policy', url: 'privacy-policy' },
        { name: 'Shipping', url: 'shipping' },
        { name: 'Return Policy', url: 'return-policy' },
        { name: 'About', url: 'about' }];

    return <ul>
        {links.map((el: IMenuLinks, i: number) => {
            return <li key={i}>
                <Link href={el.url}>{el.name}</Link>
            </li>
        })}
        <p>Copyright {new Date().getFullYear()}</p>
    </ul>
}