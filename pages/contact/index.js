import React from "react";
// next imports
import Head from "next/head";
// components
import { NavigationToolbar } from "components/toolbars";
// react bootstrap
import { Col, Container, Row } from "react-bootstrap";

function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <NavigationToolbar />
      <section className="section">
        <Container>
          <Row>
            <Col>Contact page</Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ContactPage;
