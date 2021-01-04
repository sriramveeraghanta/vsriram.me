import React, { FC } from 'react';

const EducationView: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <article>
          <div className="edu-item-header">
            <h5>
              Programming and Web Technologies Diploma
              <span className="float-right">(2019 -2021)</span>
            </h5>
          </div>
          <div className="edu-item-body">
            <p className="mb-1">
              <a href="https://isi-mtl.com/en/" target="_blank" rel="noreferrer">
                L&apos;institut Supérieur d&apos;Informatique
              </a>
            </p>
            <p>Quebec, Canada</p>
          </div>
        </article>

        <article>
          <div className="edu-item-header">
            <h5>
              Bachelor of Technology in Information Technology
              <span className="float-right">(2012 -2016)</span>
            </h5>
          </div>
          <div className="edu-item-body">
            <p className="mb-1">
              <a href="https://www.jntuk.edu.in/" target="_blank" rel="noreferrer">
                Jawaharlal Nehru Technological University Kakinada
              </a>
            </p>
            <p>Kakinada, Andhra Pradesh, India.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default EducationView;
