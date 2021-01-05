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
// framer motion
import { AnimateSharedLayout } from 'framer-motion';
import DarkModeSwitch from 'components/elements/dark-mode-switch';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Sriram Veeraghanta</title>
        </Head>
        <div className="relative-container">
          <AnimateSharedLayout>
            <SiteLayout>
              <Component {...pageProps} />
            </SiteLayout>
          </AnimateSharedLayout>
          <DarkModeSwitch />
        </div>
      </>
    );
  }
}

export default MyApp;
