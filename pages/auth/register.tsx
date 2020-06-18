import React from 'react';
import Head from 'next/head';
import Layout from '../../Components/Common/Layout';
import SignUp from '../../Components/Auth/SignUp';

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
