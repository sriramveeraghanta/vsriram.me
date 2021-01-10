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
              frameworks like NextJS, AngularJS.
            </li>
            <li>Creating REST APIs using Laravel and Django frameworks.</li>
            <li>
              Handling project architectures, implementing design methodologies that improves the
              developer experience and product workflows.
            </li>
            <li>
              Development, Deployment and Maintenance of multiple project. Handling frontend
              applications, creating REST APIs and deploying web applications on platforms like AWS,
              GCP and Digital Ocean are some of the core responsibilities.
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
            <li>
              Organize and Manage multiple teams and handle multiple projects at the same time.
            </li>
            <li>
              Create product workflows, user stories around the products, Handle scrum meetings,
              handle client meetings and make sure all teams work together for a common goal.
            </li>
            <li>
              Improve developer experience, Implementing design methodologies and handling
              deployments are some of the core responsibilities i have handled.
            </li>
            <li>
              Creating continuous integration pipelines for automated testing and continuous
              deployment pipeline are some of my core skills that helped the company a lot.
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
            <li>Engineering Lead for products like Keats, SATnPaper, Onto, Hoppercamp.</li>
            <li>
              Product Design and UI/UX design lead. Crafted design principles and programming
              practices internal to the company.
            </li>
            <li>
              Trained few interns and full-time employees on web designing and javascript
              frameworks.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ExperienceView;
