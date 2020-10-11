import React from "react";
// next imports
import Head from "next/head";
// components
import { NavigationToolbar } from "components/toolbars";
// react bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";
// icons
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <Head>
        <title>Sriram Veeraghanta</title>
      </Head>
      <section className="section">
        <Container>
          <Row>
            <Col lg={3} md={4} sm={5}>
              <Image roundedCircle className="profile-image" src="/images/profile-pic.jpg" />
            </Col>
            <Col lg={9} md={8} sm={7} className="d-flex">
              <div className="align-self-center">
                <h1 className="title">Sriram Veeraghanta</h1>
                <p className="desc">
                  Web Developer, Product Designer and Machine Learning Enthusiast.
                </p>
                <ul className="social-icons-list">
                  <li className="social-icons-item">
                    <a
                      className="social-icons-link"
                      href="mailto:veeraghanta.sriram@gmail.com"
                      target="_blank"
                    >
                      <FaEnvelope />
                    </a>
                  </li>
                  <li className="social-icons-item">
                    <a
                      className="social-icons-link"
                      href="mailto:veeraghanta.sriram@gmail.com"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </li>

                  <li className="social-icons-item">
                    <a
                      className="social-icons-link"
                      href="mailto:veeraghanta.sriram@gmail.com"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="social-icons-item">
                    <a
                      className="social-icons-link"
                      href="mailto:veeraghanta.sriram@gmail.com"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="pt-4">
          <NavigationToolbar />
        </Container>
        <Container>
          <p className="about-text">
            Web Developer, Back-end Engineer, Product Designer, and Machine Learning Enthusiast. I
            had a good share of experience working with frameworks like Flask, Django, ReactJs,
            Vuejs. Designed products in areas like E-learning, E-commerce, Event spaces, and
            Fintech. Focusing on building products using Machine Learning Algorithms.{" "}
          </p>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
