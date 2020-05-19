import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';

export default function Header() {
  const count: number = 0;

  return (
    <header>
      <img width="95px" src="logo.png" alt="Site Logo" />
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
