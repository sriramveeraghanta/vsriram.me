import React from "react";
// next imports
import Head from "next/head";
// components
import { NavigationToolbar } from "components/toolbars";
// react bootstrap
import { Col, Container, Row } from "react-bootstrap";

function EducationPage() {
  return (
    <div>
      <Head>
        <title>Education</title>
      </Head>
      <NavigationToolbar />
      <section className="section">
        <Container>
          {/* <h3 className="mb-4">Education</h3>
          <hr /> */}
          <article>
            <div className="edu-item-header">
              <h5>
                Programming and Web Technologies Diploma
                <span className="float-right">(2019 -2021)</span>
              </h5>
            </div>
            <div className="edu-item-body">
              <p className="mb-1">
                <a href="https://isi-mtl.com/en/" target="_blank">
                  L'institut Supérieur d'Informatique
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
                <a href="https://www.jntuk.edu.in/" target="_blank">
                  Jawaharlal Nehru Technological University Kakinada
                </a>
              </p>
              <p>Kakinada, Andhra Pradesh, India.</p>
            </div>
          </article>
        </Container>
      </section>
    </div>
  );
}

export default EducationPage;
