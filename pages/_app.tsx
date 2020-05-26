import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.less';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
