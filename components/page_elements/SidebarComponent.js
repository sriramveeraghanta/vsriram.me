import React from "react";
// reactbootstrap
import { Navbar, Nav } from "react-bootstrap";
// components
import ActiveLink from "components/page_elements/ActiveLink";

function SidebarComponent(props) {
  return (
    <div>
      <div className="sidebar-img-container">
        <img
          className="rounded-img"
          src="https://avatars1.githubusercontent.com/u/9498163?s=400&u=658d9561d93ca4c1ffe03b16aac0c77dd3a91c5e&v=4"
        />
      </div>
      <div className="sidebar-header ">
        <h3>Sriram Veeraghanta</h3>
      </div>
      <Nav className="flex-column sidebar-nav">
        <div className="sidebar-item">
          <ActiveLink href="/">
            <a className="sidebar-link">Home</a>
          </ActiveLink>
        </div>
        <div className="sidebar-item">
          <ActiveLink href="/about">
            <a className="sidebar-link">About</a>
          </ActiveLink>
        </div>

        <div className="sidebar-item">
          <ActiveLink href="/skills">
            <a className="sidebar-link">Skills</a>
          </ActiveLink>
        </div>

        <div className="sidebar-item">
          <ActiveLink href="/education">
            <a className="sidebar-link">Education</a>
          </ActiveLink>
        </div>

        <div className="sidebar-item">
          <ActiveLink href="/experience">
            <a className="sidebar-link">Experience</a>
          </ActiveLink>
        </div>

        <div className="sidebar-item">
          <ActiveLink href="/work">
            <a className="sidebar-link">Work</a>
          </ActiveLink>
        </div>

        <div className="sidebar-item">
          <ActiveLink href="/blog">
            <a className="sidebar-link">Blog</a>
          </ActiveLink>
        </div>

        <div className="sidebar-item">
          <ActiveLink href="/contact">
            <a className="sidebar-link">Contact</a>
          </ActiveLink>
        </div>
      </Nav>
    </div>
  );
}

export default SidebarComponent;
