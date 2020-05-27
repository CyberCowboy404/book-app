import React from 'react';

type CurrencyProps = {
  price: number;
  currency: string;
}

export default function ShowCurrency(props: CurrencyProps) {
  const { price, currency }: CurrencyProps = props;
  return (
    <span className="price">
      {price}
      {currency}
    </span>
  );
}
