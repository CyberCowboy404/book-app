import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/common/Layout';
import Login from '../../components/auth/Login';

export default function SignIn() {
  return (
    <Layout>
      <Head>
        <title>Authorization</title>
      </Head>
      <h3>Existing Customer</h3>
      <Login />
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
