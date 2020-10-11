import React from "react";
// react bootstrap
import { Nav } from "react-bootstrap";
// components
import { ActiveLink } from "components/elements";

function NavigationToolbar() {
  return (
    <Nav className="justify-content-center pt-4 pb-4" activeKey="/home">
      <Nav.Item>
        <ActiveLink href="/">
          <Nav.Link className="main-nav">About</Nav.Link>
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
  );
}

export default NavigationToolbar;
