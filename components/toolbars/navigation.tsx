import React, { FC } from 'react';
// components
import { ActiveLink } from 'components/elements';

const NavigationToolbar: FC = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <ActiveLink href="/">
          <a className="nav-link main-nav">About</a>
        </ActiveLink>
      </li>
      <li className="nav-item">
        <ActiveLink href="/skills">
          <a className="nav-link main-nav">Skills</a>
        </ActiveLink>
      </li>
      <li className="nav-item">
        <ActiveLink href="/education">
          <a className="nav-link main-nav">Education</a>
        </ActiveLink>
      </li>
      <li className="nav-item">
        <ActiveLink href="/experience">
          <a className="nav-link main-nav">Experience</a>
        </ActiveLink>
      </li>
      <li className="nav-item">
        <ActiveLink href="/work">
          <a className="nav-link main-nav">Work</a>
        </ActiveLink>
      </li>
      <li className="nav-item">
        <ActiveLink href="/blog">
          <a className="nav-link main-nav">Blog</a>
        </ActiveLink>
      </li>
      <li className="nav-item">
        <ActiveLink href="/contact">
          <a className="nav-link main-nav">Contact</a>
        </ActiveLink>
      </li>
    </ul>
  );
};

export default NavigationToolbar;
