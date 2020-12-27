import React from 'react';
// next imports
import App from 'next/app';
// axios config
import 'config/axios.config';
// app css
import 'styles/app.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
