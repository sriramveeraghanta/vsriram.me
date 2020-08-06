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
    const { Component, pageProps, router, err } = this.props;
    const Layout = Component.Layout || React.Fragment;
    const modifiedPageProps = { ...pageProps, err };

    return (
      <>
        <Layout route={router.route}>
          <Component {...modifiedPageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
