import React from "react";
// next imports
import App from "next/app";
import Router from "next/router";
// axios config
import "config/axios_configuration";
// sentry configuration
import "config/sentry_configuration";
// app css
import "styles/App.scss";
// nprogress
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

class MyApp extends App {
  render() {
    const { Component, pageProps, err } = this.props;
    const Layout = Component.Layout || React.Fragment;
    const modifiedPageProps = { ...pageProps, err };
    return (
      <>
        <Layout>
          <Component {...modifiedPageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
