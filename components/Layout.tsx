import React from 'react';
import Head from 'next/head';
import Header from './common/Header';
import Navigation from './common/Navigation';
import Footer from './common/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
