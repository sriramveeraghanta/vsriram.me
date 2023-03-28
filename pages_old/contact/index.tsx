import React from 'react';
// next imports
import Head from 'next/head';
import { NextPage } from 'next';
// components
import { ContactForm } from 'components/forms';
// react-icons
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex">
              <div className="align-self-center w-100">
                <h5 className="social-link-item">
                  <a href="mailto:veeraghanta.sriram@gmail.com">
                    <FaEnvelope />
                    <span className="pl-3"> veeraghanta.sriram@gmail.com</span>
                  </a>
                </h5>

                <h5 className="social-link-item">
                  <a href="https://github.com/sriramveeraghanta" target="blank">
                    <FaGithub />
                    <span className="pl-3"> sriramveeraghanta</span>
                  </a>
                </h5>

                <h5 className="social-link-item">
                  <a href="https://twitter.com/issriramv" target="blank">
                    <FaTwitter />
                    <span className="pl-3"> issriramv</span>
                  </a>
                </h5>

                <h5 className="social-link-item">
                  <a href="https://www.linkedin.com/in/sriram-veeraghanta-22933798/" target="blank">
                    <FaLinkedin />
                    <span className="pl-3"> sriram-veeraghanta-22933798</span>
                  </a>
                </h5>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h3 className="text-primary mt-5 mb-5">Get In Touch</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
