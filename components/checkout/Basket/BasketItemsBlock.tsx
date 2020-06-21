import React from 'react';
import { BasketItemsProp } from '../../../interfaces/IBasketType';
import { IProductAttributes } from '../../../interfaces/IProductAttributes';
import style from './BasketItemsBlock.module.less';
import ShowCurrency from '../../ShowCurrency';
import Link from 'next/link';

export function BasketItemsBlock(props: BasketItemsProp) {
  const { items } = props;
  return (
    <section className={style.itemsBlockWrapper}>
      <Link href="/checkout/basket">
        <div>
          {items.map((item: IProductAttributes, i: number) => (
            <div className={style.itemsBlock} key={i}>
              <img src={item.photos[0].url} alt={item.photos[0].alt} />
              <p>
                {item.title}
              </p>
              <p>
                {item.quantity}
              </p>
              <p>
                <ShowCurrency currency={item.currency} price={item.price}  />
              </p>
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
}
