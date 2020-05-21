import React from 'react';
import Head from 'next/head';
import Layout from '../../components/common/Layout';
import SignUp from '../../components/auth/SignUp';

export default function Register() {
  return (
    <Layout>
      <Head>
        <title>Create account</title>
      </Head>
      <SignUp />
    </Layout>
  );
}
