import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import styles from '../../../pages/checkout/basket.module.less';
import ProductVertical from '../../../Components/ProductVertical';
import EmptyBasket from '../../../Components/Checkout/Basket/EmptyBasket';
import ShowCurrency from '../../../Components/ShowCurrency';
import { BasketProp } from '../../../interfaces/IBasketType';
import { IProductAttributes } from '../../../interfaces/IProductAttributes';
import RemoveFromBasket from '../../../Components/Checkout/Basket/RemoveFromBasket';

class BasketContent extends Component<BasketProp, BasketProp> {
  public constructor(props: BasketProp) {
    super(props);
    this.state = {
      items: {},
    };
  }

  // When element rendering we don't have a state initialized.
  // We manually trigger state in order to properly load data.
  public componentDidMount() {
    this.updateItems();
  }

  public componentDidUpdate(prevProps: BasketProp) {
    const { items } = this.props;
    if (prevProps.items !== items) {
      this.updateItems();
    }
  }

  private updateItems() {
    const { items } = this.props;
    this.setState({ items });
  }

  public render() {
    let content: JSX.Element | JSX.Element[];
    const { items = {} } = this.state;
    // eslint-disable-next-line prefer-const
    const basketItems = Object.keys(items).length
      && Object.keys(items).map((item: string) => (
        { ...{ quantity: items[item].quantity }, ...items[item].item }
      ));

    if (!isEmpty(basketItems) && basketItems) {
      content = basketItems.map((product: IProductAttributes, i: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <section key={i} className={styles.basketItemWrapper}>
          <div className={styles.productWrapper}>
            <ProductVertical product={product} />
          </div>
          <div className={styles.quantityWrapper}>
            <input type="text" defaultValue={product.quantity} />
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
}

const mapStateToProps = (state: any) => ({
  items: state.basket.items,
});

export default connect(mapStateToProps)(BasketContent);
