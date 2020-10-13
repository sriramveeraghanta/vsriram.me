import React from "react";
// next imports
import Head from "next/head";
// components
import { NavigationToolbar } from "components/toolbars";
// react bootstrap
import { Col, Container, Row, Card, Button } from "react-bootstrap";

function BlogPage() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <NavigationToolbar />
      <section className="section">
        <Container>
          <h3 className="text-center">Somethings you might like.</h3>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>CSS tricks that makes web designing easy</Card.Title>
                  <Card.Text className="text-primary">Mar 22, 2017</Card.Text>
                  <Button variant="primary">Visit</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default BlogPage;
