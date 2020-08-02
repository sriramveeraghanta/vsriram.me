import React from "react";
// next imports
import Head from "next/head";
// layouts
import BasicLayout from "layouts/BasicLayout";

function BlogPage() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      Blog Page
    </div>
  );
}

BlogPage.Layout = BasicLayout;

export default BlogPage;
