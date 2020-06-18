import React from 'react';
import books from '../../../data/book';
import { IProductAttributes } from '../../../interfaces/IProductAttributes';
import ShowCurrency from '../../ShowCurrency';
import AddToBasketLink from './AddToBasketLink';

export default function EmptyBasket() {
  const suggestedBook: IProductAttributes = books[45];
  return (
    <section>
      <h4>Your basket is empty, please add an item.</h4>
      <div>
        <h5>We would like to tell you about...</h5>
        <div>
          <div>
            <img src={suggestedBook.photos[0].url} alt={suggestedBook.photos[0].alt} />
          </div>
          <div>
            <h3>{suggestedBook.title}</h3>
            <h4>{suggestedBook.author}</h4>
            <p>
              <ShowCurrency price={suggestedBook.price} currency={suggestedBook.currency} />
            </p>
            <div>
              <h4>Description</h4>
              {suggestedBook.description}
            </div>
          </div>
          <AddToBasketLink item={suggestedBook} />
        </div>
      </div>
    </section>
  );
}
