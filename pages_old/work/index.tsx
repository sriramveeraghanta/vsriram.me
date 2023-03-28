import React from 'react';
// next imports
import Head from 'next/head';
import { NextPage } from 'next';
// components
import { MyWorkView } from 'components/views';

const WorkPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Work</title>
      </Head>
      <MyWorkView />
    </div>
  );
};

export default WorkPage;
