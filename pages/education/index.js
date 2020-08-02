import React from "react";
// next imports
import Head from "next/head";
// layouts
import BasicLayout from "layouts/BasicLayout";

function EducationPage() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      EducationPage Page
    </div>
  );
}

EducationPage.Layout = BasicLayout;

export default EducationPage;
