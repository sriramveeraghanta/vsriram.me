import React from "react";
// next imports
import Head from "next/head";
// components
import { ActiveLink } from "components/elements";
// react bootstrap
import { Container, Row, Col, Nav } from "react-bootstrap";
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
            <Col>
              <img className="profile-image" src="/images/profile-pic.jpg" />
            </Col>
            <Col className="d-flex">
              <div className="align-self-center">
                <h1 className="title">Sriram Veeraghanta</h1>
                <p className="desc">
                  Web Developer, Product Designer and Machine Learning Enthusiast.
                </p>
                <div className="p-2">
                  <a
                    class="profile-social-icons"
                    href="mailto:veeraghanta.sriram@gmail.com"
                    target="_blank"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    class="profile-social-icons"
                    href="mailto:veeraghanta.sriram@gmail.com"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                  <a
                    class="profile-social-icons"
                    href="mailto:veeraghanta.sriram@gmail.com"
                    target="_blank"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    class="profile-social-icons"
                    href="mailto:veeraghanta.sriram@gmail.com"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="pt-4">
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <ActiveLink href="/">
                <Nav.Link className="main-nav">Home</Nav.Link>
              </ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink href="/skills">
                <Nav.Link className="main-nav">Skills</Nav.Link>
              </ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink href="/education">
                <Nav.Link className="main-nav">Education</Nav.Link>
              </ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink href="/experience">
                <Nav.Link className="main-nav">Experience</Nav.Link>
              </ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink href="/work">
                <Nav.Link className="main-nav">Work</Nav.Link>
              </ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink href="/blog">
                <Nav.Link className="main-nav">Blog</Nav.Link>
              </ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink href="/contact">
                <Nav.Link className="main-nav">Contact</Nav.Link>
              </ActiveLink>
            </Nav.Item>
          </Nav>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
