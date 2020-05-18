import Link from 'next/link'

export default function Navigation() {
    const navigationLinks = ['New', 'Best Sellers', 'Fiction', 'Non-Fiction', 'Find a book'];
    return (
        <nav>
            <ul>
                {navigationLinks.map( (el:string, i:number) => {
                    return <li key={i}>
                        <Link href={'/search?category=' + el}>{el}</Link>
                    </li>
                })}
            </ul>
        </nav>
    );    
}