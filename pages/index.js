import React from "react";
// next imports
import Head from "next/head";
// layouts
import BasicLayout from "layouts/BasicLayout";
// react bootstrap
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <Head>
        <title>Sriram Veeraghanta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="page-section">
        <Container>
          Hello this is sriram
          <h5>https://colorlib.com/preview/theme/jackson/</h5>
        </Container>
      </section>
    </>
  );
}

HomePage.Layout = BasicLayout;

export default HomePage;
