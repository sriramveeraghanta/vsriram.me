import React from 'react';
// next imports
import App from 'next/app';
// axios config
import 'config/axios.config';
// layouts
import SiteLayout from '../lib/site-layout';
// app css
import '../styles/app.scss';
// components
import DarkModeSwitch from 'components/elements/dark-mode-switch';
// themes
import { ThemeProvider } from 'next-themes';
// next-seo
import { DefaultSeo } from 'next-seo';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ThemeProvider>
          <DefaultSeo
            openGraph={{
              type: 'website',
              locale: 'en_IE',
              url: 'https://vsriram.me/',
              site_name: 'Sriram Veeraghanta'
            }}
          />
          <div className="relative-container">
            <SiteLayout>
              <Component {...pageProps} />
            </SiteLayout>
            <DarkModeSwitch />
          </div>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
