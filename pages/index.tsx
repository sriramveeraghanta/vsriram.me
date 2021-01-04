import React from 'react';
// next imports
import { NextPage } from 'next';
import Head from 'next/head';
// components
import { AboutView } from 'components/views';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sriram Veeraghanta</title>
      </Head>
      <AboutView />
    </>
  );
};

export default HomePage;
