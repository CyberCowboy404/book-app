/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import IMenuLinks from '../../interfaces/IMenuLinks';

export default function Navigation() {
  const navigationLinks: IMenuLinks[] = [
    { name: 'New', url: 'new', order: 1 },
    { name: 'Best Sellers', url: 'best-sellers', order: 2 },
    { name: 'Fiction', url: 'fiction', order: 3 },
    { name: 'Non-Fiction', url: 'non-fiction', order: 4 },
    { name: 'Find a book', url: 'search', order: 5 }];

  return (
    <nav>
      <ul>
        {navigationLinks.map((el: IMenuLinks) => (
          <li key={el.order}>
            <Link href={{ pathname: '/search', query: { category: el.url } }}><a>{el.name}</a></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
