import React from 'react';
// next imports
import Head from 'next/head';
// components
import { GithubRepoCard } from 'components/cards';
import { NextPage } from 'next';

const WorkPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Work</title>
      </Head>
      <section className="section">
        <div className="container">
          <h3 className="text-center">Things I made for fun.</h3>
          <div className="row">
            <div className="col-sm-4">
              <GithubRepoCard url="https://api.github.com/repos/sriramveeraghanta/github-clone-android" />
            </div>
            <div className="col-sm-4">
              <GithubRepoCard url="https://api.github.com/repos/sriramveeraghanta/hangman-game" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
