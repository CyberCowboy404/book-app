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
      </Layout>
    );
  }
}
