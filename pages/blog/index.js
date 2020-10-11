import React from "react";
// next imports
import Head from "next/head";
// components
import { NavigationToolbar } from "components/toolbars";
// react bootstrap
import { Col, Container, Row } from "react-bootstrap";

function BlogPage() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <NavigationToolbar />
      <section className="section">
        <Container>
          <Row>
            <Col>BlogPage</Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default BlogPage;
