import React, { FC } from 'react';
// components
import { NavigationToolbar } from 'components/toolbars';
// icons
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutView: FC = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-5 col-md-4 col-lg-4">
              <img className="profile-image" src="/images/profile-pic.jpg" />
            </div>
            <div className="col-12 col-sm-7 col-md-6 col-lg-5 d-flex">
              <div className="align-self-center">
                <h1 className="title">Sriram Veeraghanta</h1>
                <p className="desc">
                  Web Developer, Product Designer and Machine Learning Enthusiast.
                </p>
                <ul className="social-icons-list">
                  <li className="social-icons-item">
                    <a
                      className="social-icons-link"
                      href="mailto:veeraghanta.sriram@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaEnvelope />
                    </a>
                  </li>
                  <li className="social-icons-item">
                    <a
                      className="social-icons-link"
                      href="https://github.com/sriramveeraghanta"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </li>

                  <li className="social-icons-item">
                    <a
                      className="social-icons-link"
                      href="https://twitter.com/issriramv"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="social-icons-item">
                    <a
                      className="social-icons-link"
                      href="https://www.linkedin.com/in/sriram-veeraghanta-22933798/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-4">
          <NavigationToolbar />
        </div>
        <div className="container">
          <p className="about-text">
            Web Developer, Back-end Engineer, Product Designer, and Machine Learning Enthusiast. I
            had a good share of experience working with frameworks like Flask, Django, ReactJs,
            Vuejs. Designed products in various areas like E-learning, E-commerce, Event spaces, and
            Fintech. Focusing on building products using Machine Learning Algorithms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
