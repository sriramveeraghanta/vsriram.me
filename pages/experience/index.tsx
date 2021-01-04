import React from 'react';
// next imports
import Head from 'next/head';
// next
import { NextPage } from 'next';
// components
import { ExperienceView } from 'components/views';

const ExperiencePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Experience</title>
      </Head>
      <ExperienceView />
    </div>
  );
};

export default ExperiencePage;
