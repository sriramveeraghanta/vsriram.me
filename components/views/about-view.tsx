import React, { FC } from 'react';
// components
import { NavigationToolbar } from 'components/toolbars';
// icons
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
// framer motion
import { motion } from 'framer-motion';

const textVariant = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.4
    }
  }
};

const AboutView: FC = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-5 col-md-4 col-lg-4 d-flex">
              <div className="align-self-center pt-4 pb-4">
                <motion.img
                  className="profile-image"
                  src="/images/profile.webp"
                  alt="profile-image-not-found"
                  whileHover={{
                    position: 'relative',
                    zIndex: 1,
                    background: 'white',
                    scale: 1.2,
                    transition: {
                      duration: 0.2
                    }
                  }}
                />
              </div>
            </div>
            <div className="col-12 col-sm-7 col-md-6 col-lg-5 d-flex">
              <motion.div
                className="align-self-center pt-4 pb-4"
                initial="hidden"
                animate="visible"
                variants={textVariant}
              >
                <h1 className="title text-center text-sm-start">Sriram Veeraghanta</h1>
                <p className="desc text-center text-sm-start">
                  Web Developer, Product Designer and Machine Learning Enthusiast.
                </p>

                <ul className="social-icons-list justify-content-sm-start justify-content-center">
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
                  <li>
                    <a
                      className="social-icons-link btn btn-primary btn-sm btn-rounded"
                      href="/resume-simple.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download Resume
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="container pt-4">
          <NavigationToolbar />
        </div>
        <div className="container">
          <motion.p
            className="about-text pl-4 pr-4"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            I am a Web Developer, Back-end Engineer, Product Designer, and Machine Learning
            Enthusiast. I have 4 years of experience working with frameworks like Flask, Django,
            Express, ReactJS, VueJS and AngularJS. Designed products in varied domains like
            E-learning, E-commerce, Event spaces, and Fintech. Currently focusing on building
            scalable products using Machine Learning Algorithms.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
