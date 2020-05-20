import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  const count: number = 0;

  return (
    <header>
      <Link href="/">
        <img width="95px" src="/logo.png" alt="Site Logo" />
      </Link>
      <div>
        <button type="button">Login</button>
        <button type="button">Register</button>
      </div>
      <div>
        <FaShoppingBasket />
        <span>{count}</span>
      </div>
    </header>
  );
}
