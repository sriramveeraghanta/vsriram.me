import React from "react";
// next imports
import Head from "next/head";
// layouts
import BasicLayout from "layouts/BasicLayout";

function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      ContactPage Page
    </div>
  );
}

ContactPage.Layout = BasicLayout;

export default ContactPage;
