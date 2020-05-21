import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

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
