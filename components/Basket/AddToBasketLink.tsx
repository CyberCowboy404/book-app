import React from 'react';

export class AddToBasketLink extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.addToBasket = this.addToBasket.bind(this);
  }

  addToBasket() {
    console.log(this);
  }

  render() {
    return (
      <button onClick={this.addToBasket} type="button">Add to busket</button>
    );
  }
}
