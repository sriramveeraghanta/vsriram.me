import React from 'react';
// next imports
import Head from 'next/head';
// components
import { NavigationToolbar } from 'components/toolbars';
// react bootstrap
import { Container } from 'react-bootstrap';

function ExperiencePage() {
  return (
    <div>
      <Head>
        <title>Experience</title>
      </Head>
      <NavigationToolbar />
      <section className="section">
        <Container>
          {/* <h3>Experience</h3>
          <hr className="mb-4" /> */}
          <article className="exp-item">
            <h5>
              Soulpage IT Solutions <span className="float-right">(Jan 2020 to Dec 2020)</span>
            </h5>
            <p>
              Engineering Manager (Remote Part-Time)
              <span className="float-right text-secondary">Hyderabad, India</span>
            </p>
            <ul>
              <li>
                Design and development of interactive user interfaces and user experience using
                ReactJS.
              </li>
              <li>Creating a video classroom interface using TokBox.</li>
              <li>
                Taking the lead of product design and adding necessary changes based on the user’s
                requirement.
              </li>
            </ul>
          </article>

          <article className="exp-item">
            <h5>
              WealthTab <span className="float-right">(Mar 2019 to Dec 2020)</span>
            </h5>
            <p>
              Full Stack Developer (Part-Time)
              <span className="float-right text-secondary">Montreal, Canada</span>
            </p>
            <ul>
              <li>
                Design and development of interactive user interfaces and user experience using
                ReactJS.
              </li>
              <li>Creating a video classroom interface using TokBox.</li>
              <li>
                Taking the lead of product design and adding necessary changes based on the user’s
                requirement.
              </li>
            </ul>
          </article>

          <article className="exp-item">
            <h5>
              Caravel.AI <span className="float-right">(May 2017 to Present)</span>
            </h5>
            <p>
              Co-Founder and Head of Engineering
              <span className="float-right text-secondary">Hyderabad, India</span>
            </p>
            <ul>
              <li>
                Design and development of progressive web applications and single-page applications.
              </li>
              <li>Building interactive applications for both web and mobile using rest API.</li>
              <li>Engineering Lead for products like Keats, SATnPaper, Onto, Hoppercamp.</li>
              <li>Product Design and UI/UX design lead.</li>
              <li>Crafted design principles and programming practices internal to the company.</li>
              <li>
                Trained few interns and full-time employees on web designing and javascript
                frameworks.
              </li>
            </ul>
          </article>

          <article className="exp-item">
            <h5>
              Tuttor <span className="float-right">(June 2016 to April 2017)</span>
            </h5>
            <p>
              Head of Design
              <span className="float-right text-secondary">Hyderabad, India</span>
            </p>
            <ul>
              <li>
                Design and development of interactive user interfaces and user experience using
                ReactJS.
              </li>
              <li>Creating a video classroom interface using TokBox.</li>
              <li>
                Taking the lead of product design and adding necessary changes based on the user’s
                requirement.
              </li>
            </ul>
          </article>
        </Container>
      </section>
    </div>
  );
}

export default ExperiencePage;
