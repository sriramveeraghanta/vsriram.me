import React from "react";
// next imports
import Head from "next/head";
// components
import { NavigationToolbar } from "components/toolbars";
import { ContactForm } from "components/forms";
// react bootstrap
import { Col, Container, FormGroup, Row } from "react-bootstrap";
// react-icons
import { FaEnvelope, FaTwitter, FaGithub } from "react-icons/fa";

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
            <Col className="d-flex">
              <div className="align-self-center w-100">
                <h5 className="mb-4">
                  <FaEnvelope />
                  <span className="pl-3">veeraghanta.sriram@gmail.com</span>
                </h5>
                <h5 className="mb-4">
                  <FaGithub />
                  <span className="pl-3">sriramveeraghanta</span>
                </h5>
                <h5 className="mb-4">
                  <FaTwitter />
                  <span className="pl-3">issriramv</span>
                </h5>
              </div>
            </Col>
            <Col>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ContactPage;
