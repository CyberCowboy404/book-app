/* eslint-disable jsx-a11y/anchor-is-valid */
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
      <section>
        <Link href="/auth/signin">
          <button type="button">Login</button>
        </Link>
        <Link href="/auth/register">
          <button type="button">Register</button>
        </Link>
        <div>
          <Link href="/checkout/basket">
            <a>
              <FaShoppingBasket />
              <span>{count}</span>
            </a>
          </Link>
        </div>
      </section>
    </header>
  );
}
