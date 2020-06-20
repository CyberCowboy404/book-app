import React from 'react';
import { connect } from 'react-redux';
import { removeFromBasket } from '../../../redux/actions/removeFromBasket';
import { BasketLinkProps } from '../../../interfaces/IBasketType';

function RemoveFromBasket(props: BasketLinkProps) {
  const { item } = props;

  function handleClick() {
    const ids = item.title;
    if (props.removeFromBasket) {
      props.removeFromBasket([ids]);
    }
  }

  return (
    <section>
      <button onClick={handleClick} type="button">
        Remove from basket
      </button>
    </section>
  );
}

export default connect(null, { removeFromBasket })(RemoveFromBasket);
