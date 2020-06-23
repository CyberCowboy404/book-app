import React, { Component, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { addToBasket } from '../../../redux/actions/addToBasket';
import { BasketLinkProps } from '../../../interfaces/IBasketType';

class AddToBasketLink extends Component<BasketLinkProps, { quantity: number }> {
  constructor(props: BasketLinkProps) {
    super(props);
    this.addToBasket = this.addToBasket.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      quantity: 1,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  handleChange(value: string) {
    this.setState({
      quantity: Number(value),
    });
  }

  addToBasket() {
    // eslint-disable-next-line no-shadow
    const { item, addToBasket, items } = this.props;
    const { quantity } = this.state;

    if (!item) return;

    const basketItem = {
      [item.title]: {
        quantity,
        item,
      },
    };

    if (!items || !addToBasket) {
      return;
    }

    if (items[item.title]) {
      basketItem[item.title].quantity =
        Number(quantity) + items[item.title].quantity || 0;
    }

    addToBasket(basketItem);
  }

  render() {
    const { quantity } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="quantity">
            Quantity
            <input
              id="quantity"
              type="number"
              autoComplete="off"
              defaultValue={quantity}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                this.handleChange(e.target.value)}
            />
          </label>
        </div>
        <button onClick={this.addToBasket} type="button">
          Add to basket
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  items: state.basket.items,
});

const mapDispatchToProps = {
  addToBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToBasketLink);
