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
        <Link href="/auth/signin">
          <button type="button">Login</button>
        </Link>
        <Link href="/auth/register">
          <button type="button">Register</button>
        </Link>
      </div>
      <div>
        <FaShoppingBasket />
        <span>{count}</span>
      </div>
    </header>
  );
}
