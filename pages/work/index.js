import React from "react";
// next imports
import Head from "next/head";
// components
import { NavigationToolbar } from "components/toolbars";
// react bootstrap
import { Col, Container, Row } from "react-bootstrap";

function WorkPage() {
  return (
    <div>
      <Head>
        <title>Work</title>
      </Head>
      <NavigationToolbar />
      <section className="section">
        <Container>
          <Row>
            <Col>Work page</Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default WorkPage;
