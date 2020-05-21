import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/common/Layout';

export default function SignIn() {
  return (
    <Layout>
      <Head>
        <title>Authorization</title>
      </Head>
      <section>
        <h3>Existing Customer</h3>
        <form>
          <div>
            <label htmlFor="email">
              Email
              <input type="email" name="email" id="email" />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input type="password" id="password" />
            </label>
          </div>
          <div>
            <label htmlFor="remember">
              Remember me
              <input type="checkbox" />
            </label>
          </div>
          <div>
            <button type="submit">Sign in</button>
          </div>
          <div>
            <Link href="/auth/recover-password">
              Recover password
            </Link>
          </div>
        </form>
      </section>
      <section>
        <h3>New Customer</h3>
        <span>Start your journey by creating your account.</span>
        <Link href="/auth/register">
          <button type="button">Create new account</button>
        </Link>
      </section>
    </Layout>
  );
}
