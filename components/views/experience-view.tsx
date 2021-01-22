import React, { FC } from 'react';

const ExperienceView: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <article className="exp-item">
          <h5 className="text-primary">Full Stack Developer</h5>
          <p className="mb-1">
            WealthTab
            <span className="float-end">Mar 2019 - Jan 2021</span>
          </p>
          <p className="float-right text-info">Montreal, Canada</p>
          <ul>
            <li>
              Building scalable fintech applications, designing interactive user interfaces using
              frameworks like NextJS and AngularJS.
            </li>
            <li>Creating REST APIs using Laravel and Django frameworks.</li>
            <li>
              Handling project architectures, implementing design methodologies improving the
              developer experience and product workflows.
            </li>
            <li>
              Development, Deployment and Maintenance of multiple projects. Core responsibilities
              include handling frontend applications, deploying web applications on platforms like
              AWS, GCP and Digital Ocean.
            </li>
          </ul>
        </article>

        <article className="exp-item">
          <h5 className="text-primary">Engineering Manager</h5>
          <p className="mb-1">
            Soulpage IT Solutions
            <span className="float-end">Jan 2020 - Jan 2021</span>
          </p>
          <p className="float-right text-info">Hyderabad, India</p>
          <ul>
            <li>Organizing and Managing multiple teams and projects at the same time.</li>
            <li>Created product workflows, user stories around the products.</li>
            <li>
              Effectively conducted scrum team meetings and client meetings ensuring all teams work
              together towards a common goal.
            </li>
            <li>
              Improving developer experience, implementing design methodologies and handling
              deployments are some of the core responsibilities.
            </li>
            <li>
              Created Continuous Integration(CI) pipelines for automated testing and Continuous
              Deployment(CD) pipelines greatly helped the team to deliver robust solutions.
            </li>
          </ul>
        </article>

        <article className="exp-item">
          <h5 className="text-primary">Head of Engineering</h5>
          <p className="mb-1">
            Caravel.AI
            <span className="float-end">2016</span>
          </p>
          <p className="float-right text-info">Hyderabad, India</p>
          <ul>
            <li>
              Design and development of progressive web applications and single-page applications.
            </li>
            <li>Building interactive applications for both web and mobile using REST APIs.</li>
            <li>
              Served as an Engineering Lead for products - Keats, SATnPaper, Onto, Hoppercamp.
            </li>
            <li>
              As a Product and UI/UX design Lead, I curated design principles and programming
              practices for the company.
            </li>
            <li>
              Trained interns and full-time employees on Web Designing and Javascript frameworks.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ExperienceView;
