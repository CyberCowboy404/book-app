/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import IMenuLinks from '../../interfaces/IMenuLinks';

export default function Footer() {
  const links: IMenuLinks[] = [
    { name: 'Terms and conditions', url: '/legal/terms-and-conditions', order: 1 },
    { name: 'Privacy Policy', url: 'privacy-policy', order: 2 },
    { name: 'Shipping', url: 'shipping', order: 3 },
    { name: 'Return Policy', url: 'return-policy', order: 4 },
    { name: 'About', url: 'about', order: 5 }];

  return (
    <ul>
      {links.map((el: IMenuLinks) => (
        <li key={el.order}>
          <Link href={el.url}><a>{el.name}</a></Link>
        </li>
      ))}
      <p>
        Copyright
        {new Date().getFullYear()}
      </p>
    </ul>
  );
}
