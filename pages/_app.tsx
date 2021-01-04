import React from 'react';
// next imports
import App from 'next/app';
import Head from 'next/head';
// axios config
import 'config/axios.config';
// layouts
import SiteLayout from '../lib/site-layout';
// app css
import '../styles/app.scss';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Sriram Veeraghanta</title>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </>
    );
  }
}

export default MyApp;
