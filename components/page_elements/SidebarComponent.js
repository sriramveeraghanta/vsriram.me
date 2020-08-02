import React from "react";
// reactbootstrap
import { Navbar, Nav } from "react-bootstrap";
// components
import ActiveLink from "components/page_elements/ActiveLink";

function SidebarComponent(props) {
  return (
    <div>
      <h3>Sriram Veeraghanta</h3>
      <Nav className="flex-column">
        <ActiveLink href="/">
          <a className="sidebar-link">
            <div className="sidebar-link-text">Home</div>
          </a>
        </ActiveLink>
        <ActiveLink href="/about">
          <a className="sidebar-link">
            <div className="sidebar-link-text">About</div>
          </a>
        </ActiveLink>
        <ActiveLink href="/">
          <a className="sidebar-link">
            <div className="sidebar-link-text">Skills</div>
          </a>
        </ActiveLink>
        <ActiveLink href="/">
          <a className="sidebar-link">
            <div className="sidebar-link-text">Education</div>
          </a>
        </ActiveLink>
        <ActiveLink href="/">
          <a className="sidebar-link">
            <div className="sidebar-link-text">Experience</div>
          </a>
        </ActiveLink>
        <ActiveLink href="/">
          <a className="sidebar-link">
            <div className="sidebar-link-text">Work</div>
          </a>
        </ActiveLink>
        <ActiveLink href="/">
          <a className="sidebar-link">
            <div className="sidebar-link-text">Blog</div>
          </a>
        </ActiveLink>
        <ActiveLink href="/">
          <a className="sidebar-link">
            <div className="sidebar-link-text">Contact</div>
          </a>
        </ActiveLink>
      </Nav>
    </div>
  );
}

export default SidebarComponent;
