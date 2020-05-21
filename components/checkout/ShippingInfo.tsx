import React from 'react';
import shippingOptions from '../../data/ShippingOptions';
import IShippingInformation from '../../interfaces/IShippingInformation';
import ShowCurrency from '../ShowCurrency';

export default function ShippingInfo() {
  return (
    <div>
      <h3>Delivery options</h3>
      {shippingOptions.map((option: IShippingInformation) => (
        <div key={option.id}>
          <div>
            <p>
              Service name:
              {option.name}
            </p>
            <p>
              Average time:
              {option.description}
            </p>
          </div>
          <div>
            <ShowCurrency price={option.price} currency={option.currency} />
          </div>
        </div>
      ))}
    </div>
  );
}
