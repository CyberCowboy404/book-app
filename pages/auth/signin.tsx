import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../Components/Common/Layout';
import Login from '../../Components/Auth/Login';
import styles from './signin.module.less';

export default function SignIn() {
  return (
    <Layout>
      <Head>
        <title>Authorization</title>
      </Head>
      <div className={styles.signInPageWrapper}>
        <div className={styles.authItem}>
          <h3>Existing Customer</h3>
          <Login />
        </div>
        <div className={styles.authItem}>
          <h3>New Customer</h3>
          <section>
            <span>Start your journey by creating your account.</span>
            <Link href="/auth/register">
              <button type="button">Create new account</button>
            </Link>
          </section>
        </div>
      </div>
    </Layout>
  );
}
