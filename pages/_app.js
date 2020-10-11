import React from "react";
// next imports
import App from "next/app";
// axios config
import "config/axios_configuration";
// sentry configuration
import "config/sentry_configuration";
// app css
import "styles/App.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps, err } = this.props;
    const modifiedPageProps = { ...pageProps, err };

    return (
      <>
        <Component {...modifiedPageProps} />
      </>
    );
  }
}

export default MyApp;
