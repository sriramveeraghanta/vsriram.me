import React from "react";
// next imports
import Head from "next/head";
// components
import { NavigationToolbar } from "components/toolbars";
// react bootstrap
import { Col, Container, Row } from "react-bootstrap";

function SkillsPage() {
  return (
    <div>
      <Head>
        <title>Skills</title>
      </Head>
      <NavigationToolbar />
      <section className="section">
        <Container>
          <Row>
            <Col>SkillsPage</Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default SkillsPage;
