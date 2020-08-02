import React from "react";
// next imports
import Head from "next/head";
// layouts
import BasicLayout from "layouts/BasicLayout";

function AboutPage() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      About Page
    </div>
  );
}

AboutPage.Layout = BasicLayout;

export default AboutPage;