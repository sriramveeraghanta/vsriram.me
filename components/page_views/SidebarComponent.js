import React from "react";
// reactbootstrap
import { Navbar, Nav } from "react-bootstrap";

function SidebarComponent(props) {
  return (
    <div>
      <h3>Sriram Veeraghanta</h3>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link eventKey="link-1">About</Nav.Link>
        <Nav.Link eventKey="link-2">Skills</Nav.Link>
        <Nav.Link eventKey="link-2">Education</Nav.Link>
        <Nav.Link eventKey="link-2">Experience</Nav.Link>
        <Nav.Link eventKey="link-2">Work</Nav.Link>
        <Nav.Link eventKey="link-2">Blog</Nav.Link>
        <Nav.Link eventKey="link-2">Contact</Nav.Link>
      </Nav>
    </div>
  );
}

export default SidebarComponent;
