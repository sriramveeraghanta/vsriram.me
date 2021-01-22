import React from 'react';
// next imports
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
// components
import { AboutView } from 'components/views';

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Sriram Veeraghanta"
        description="Web Developer, Product Designer and Machine Learning Enthusiast."
        canonical="https://vsriram.me/"
        openGraph={{
          url: 'https://vsriram.me/',
          title: 'Sriram Veeraghanta',
          description: 'Web Developer, Product Designer and Machine Learning Enthusiast.',
          site_name: 'Sriram Veeraghanta'
        }}
      />
      <AboutView />
    </>
  );
};

export default HomePage;
