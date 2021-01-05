import React from 'react';
// next imports
import Head from 'next/head';
import { NextPage } from 'next';
// components
import { ContactForm } from 'components/forms';
// react-icons
import { FaEnvelope, FaTwitter, FaGithub } from 'react-icons/fa';

const ContactPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col d-flex">
              <div className="align-self-center w-100">
                <h5 className="mb-4">
                  <FaEnvelope />
                  <span className="pl-3">veeraghanta.sriram@gmail.com</span>
                </h5>
                <h5 className="mb-4">
                  <FaGithub />
                  <span className="pl-3">sriramveeraghanta</span>
                </h5>
                <h5 className="mb-4">
                  <FaTwitter />
                  <span className="pl-3">issriramv</span>
                </h5>
              </div>
            </div>
            <div className="col">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
