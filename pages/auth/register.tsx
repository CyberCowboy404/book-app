import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/common/Layout';

export default function Register() {
  return (
    <Layout>
      <Head>
        <title>Create account</title>
      </Head>
      <section>
        <form>
          <div>
            <label htmlFor="firstName">
              First name *
              <input type="text" id="firstName" />
            </label>
            <label htmlFor="lastName">
              Last name *
              <input type="text" id="lastName" />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email *
              <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="confirmEmail">
              Confirm email *
              <input type="email" name="email" id="confirmEmail" />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Choose a password *
              <input type="password" id="password" />
            </label>
            <label htmlFor="passwordConfirm">
              Confirm password *
              <input type="password" id="confirmPassword" />
            </label>
          </div>
          <div>
            <label htmlFor="agree">
              I agree to the
              <Link href="/legal/terms-and-conditions">Terms and conditions</Link>
              <input type="checkbox" id="agree" />
            </label>
          </div>
          <button type="submit">Register</button>
        </form>
      </section>
    </Layout>
  );
}
