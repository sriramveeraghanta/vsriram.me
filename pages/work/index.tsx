import React from 'react';
// next imports
import Head from 'next/head';
// components
import { NavigationToolbar } from 'components/toolbars';
import { GithubRepoCard } from 'components/cards';
// react bootstrap
import { Col, Container, Row } from 'react-bootstrap';

function WorkPage() {
  return (
    <div>
      <Head>
        <title>Work</title>
      </Head>
      <NavigationToolbar />
      <section className="section">
        <Container>
          {/* <h3 className="text-center">Things you can contribute to</h3> */}
          <h3 className="text-center">Things I made for fun.</h3>
          <Row>
            <Col>
              <GithubRepoCard url="https://api.github.com/repos/sriramveeraghanta/github-clone-android" />
            </Col>
            <Col>
              <GithubRepoCard url="https://api.github.com/repos/sriramveeraghanta/hangman-game" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default WorkPage;
