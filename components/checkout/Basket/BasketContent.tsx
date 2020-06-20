import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import styles from '../../../pages/checkout/basket.module.less';
import ProductVertical from '../../../Components/ProductVertical';
import EmptyBasket from '../../../Components/Checkout/Basket/EmptyBasket';
import ShowCurrency from '../../../Components/ShowCurrency';
import { BasketProp } from '../../../interfaces/IBasketType';
import { IProductAttributes } from '../../../interfaces/IProductAttributes';
import RemoveFromBasket from '../../../Components/Checkout/Basket/RemoveFromBasket';

function BasketContent(props: BasketProp) {
  let content: JSX.Element | JSX.Element[];
  const { items = {} } = props;
  const basketItems = Object.keys(items).length && Object.keys(items).map(
    (item: string) => items[item].item
  );

  if (basketItems) {
    content = basketItems.map((product: IProductAttributes, i: number) => (
      // eslint-disable-next-line react/no-array-index-key
      <section key={i} className={styles.basketItemWrapper}>
        <div className={styles.productWrapper}>
          <ProductVertical product={product} />
        </div>
        <div className={styles.quantityWrapper}>
          <select name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <ShowCurrency price={product.price} currency={product.currency} />
          <RemoveFromBasket item={product} />
        </div>
        <div className={styles.checkoutLinkWrapper}>
          <Link href="/checkout/order">
            <button type="button">Go to checkout</button>
          </Link>
        </div>
      </section>
    ));
  } else {
    content = <EmptyBasket />;
  }

  return (
    <div>
      <div className={styles.basketItemsWrapper}>{content}</div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  items: state.basket.items,
});

export default connect(mapStateToProps)(BasketContent);
