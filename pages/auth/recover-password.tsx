import React from 'react';
import Head from 'next/head';
import Layout from '../../components/common/Layout';

export default function RecoverPassword() {
  return (
    <Layout>
      <Head>
        <title>Recover password</title>
      </Head>
      <section>
        <h2>Recover your password</h2>
        <form>
          <div>
            <label htmlFor="email">
              Please enter your email address below and we&apos;ll send you a link to reset your
              password.
              <input type="email" name="email" placeholder="Email address" id="email" />
            </label>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </Layout>
  );
}
