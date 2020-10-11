import React from "react";
// next imports
import Head from "next/head";
// components
import { NavigationToolbar } from "components/toolbars";
// react bootstrap
import { Col, Container, Row } from "react-bootstrap";

function ExperiencePage() {
  return (
    <div>
      <Head>
        <title>Experience</title>
      </Head>
      <NavigationToolbar />
      <section className="section">
        <Container>
          <Row>
            <Col>Experience page</Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ExperiencePage;
