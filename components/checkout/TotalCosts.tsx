import React from 'react';
import shippingOptions from '../../data/ShippingOptions';
import IShippingInformation from '../../interfaces/IShippingInformation';
import ShowCurrency from '../../Components/ShowCurrency';

export default function TotalCosts() {
  const totalItems: number = 3;
  const subTotal: number = 30;
  const selectedDelivery: IShippingInformation = shippingOptions[1];
  const totalPrice: number = subTotal + selectedDelivery.price;

  return (
    <div>
      <h3>Order info</h3>
      <div>
        <p>
          Total items:
          {totalItems}
        </p>
        <p>
          Sub total:
          {subTotal}
        </p>
        <p>
          Delivery:
          <span>
            {selectedDelivery.name}
          </span>
          <span>
            <ShowCurrency price={selectedDelivery.price} currency={selectedDelivery.currency} />
          </span>
        </p>
        <p>
          Total:
          <ShowCurrency price={totalPrice} currency={selectedDelivery.currency} />
        </p>
      </div>
    </div>
  );
}
