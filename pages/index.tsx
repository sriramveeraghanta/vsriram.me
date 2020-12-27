import React from 'react';
// next imports
import Head from 'next/head';
// components
import { AboutView } from 'components/views';

function HomePage() {
  return (
    <>
      <Head>
        <title>Sriram Veeraghanta</title>
      </Head>
      <AboutView />
    </>
  );
}

export default HomePage;
