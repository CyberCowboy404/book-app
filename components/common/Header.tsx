/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import Link from 'next/link';
import { connect } from 'react-redux';
import { BasketStorage, BasketProp } from '../../interfaces/IBasketType';

export function Header(props: BasketProp) {
  let count: number = 0;
  const { items } = props;
  const itemsArr: [string, BasketStorage][] = Object.entries(items);

  count = itemsArr.reduce((accumulator, val) => accumulator + val[1].quantity, 0);

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

const mapStateToProps = (state: any) => ({
  items: state.basket.items,
});

export default connect(mapStateToProps)(Header);
