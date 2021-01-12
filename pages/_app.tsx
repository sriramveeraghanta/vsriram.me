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
import { AnimatePresence, motion } from 'framer-motion';
// components
import DarkModeSwitch from 'components/elements/dark-mode-switch';
// themes
import { ThemeProvider } from 'next-themes';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps, router } = this.props;
    const spring = {
      type: 'spring',
      damping: 20,
      stiffness: 100,
      when: 'afterChildren'
    };

    return (
      <>
        <ThemeProvider>
          <Head>
            <title>Sriram Veeraghanta</title>
          </Head>
          <div className="relative-container">
            <SiteLayout>
              <AnimatePresence>
                <motion.div
                  transition={spring}
                  key={router.pathname}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  id="page-transition-container"
                >
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>
            </SiteLayout>
            <DarkModeSwitch />
          </div>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
