/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
// next imports
import Head from 'next/head';
// components
import { EducationView } from 'components/views';

function EducationPage() {
  return (
    <div>
      <Head>
        <title>Education</title>
      </Head>
      <EducationView />
    </div>
  );
}

export default EducationPage;
