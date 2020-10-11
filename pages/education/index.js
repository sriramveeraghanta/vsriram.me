import React from "react";
// next imports
import Head from "next/head";
// components
import { NavigationToolbar } from "components/toolbars";
// react bootstrap
import { Col, Container, Row } from "react-bootstrap";

function EducationPage() {
  return (
    <div>
      <Head>
        <title>Education</title>
      </Head>
      <NavigationToolbar />
      <section className="section">
        <Container>
          <Row>
            <Col>Education page</Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default EducationPage;
