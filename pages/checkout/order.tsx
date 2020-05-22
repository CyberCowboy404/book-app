/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import Layout from '../../components/common/Layout';
import Login from '../../components/auth/Login';
import SignUp from '../../components/auth/SignUp';

type OrderState = {
  content: null | JSX.Element,
  hasAccount: number;
}

export default class Order extends Component<{}, OrderState> {
  constructor(props: OrderState) {
    super(props);

    this.state = {
      content: <Login />,
      hasAccount: 1,
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    const hasAccount = Number(event.target.value);
    const content: JSX.Element = hasAccount === 1 ? <Login /> : <SignUp />;

    this.setState({
      content,
      hasAccount,
    });
  }

  render() {
    const { content, hasAccount } = this.state;

    return (
      <Layout>
        <div>
          <h3>Do you have an account?</h3>
          <div>
            <label htmlFor="hasAccount">
              Yes
              <input
                name="hasAccount"
                id="hasAccount"
                type="radio"
                checked={hasAccount === 1}
                onChange={(e) => this.handleOptionChange(e)}
                value={1}
                autoComplete="off"
              />
            </label>
          </div>
          <div>
            <label htmlFor="noAccount">
              No
              <input
                name="hasAccount"
                id="noAccount"
                type="radio"
                checked={hasAccount === 0}
                onChange={(e) => this.handleOptionChange(e)}
                value={0}
                autoComplete="off"
              />
            </label>
          </div>
        </div>
        {content}
        <section>
          <h3>Delivery details</h3>
          <div>
            <div>
              <label htmlFor="firstName">First name:</label>
              <input name="firstName" type="text" id="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">Last name:</label>
              <input name="lastName" type="text" id="lastName" />
            </div>
            <div>
              <label htmlFor="firstName">Country:</label>
              <select name="country" id="country">
                <option value="usa">United States</option>
              </select>
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input name="address" type="text" id="address" />
            </div>
            <div>
              <label htmlFor="state">State:</label>
              <select name="state" id="state">
                <option value="AL">Alabama</option>
              </select>
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <input name="city" type="text" id="city" />
            </div>
          </div>
        </section>
        <section>
          <h3>Payment details</h3>
          <div>
            <label htmlFor="fullName">Name on card:</label>
            <input name="fullName" type="text" id="fullName" />
          </div>
          <div>
            <label htmlFor="cardNumber">Card number:</label>
            <input name="cardNumber" type="text" id="cardNumber" />
          </div>
          <div>
            <span>Expire date: </span>
            <select name="month" id="month">
              <option value="">Month</option>
            </select>
            <select name="year" id="year">
              <option value="">Year</option>
            </select>
          </div>
        </section>
        <div>
          <button type="button">Pay</button>
        </div>
      </Layout>
    );
  }
}
