import React, { FC } from 'react';
// next imports
import Head from 'next/head';
// icons
import { FaHeart } from 'react-icons/fa';

const SkillsPage: FC = () => {
  return (
    <div>
      <Head>
        <title>Skills</title>
      </Head>
      <section className="section">
        <div className="container">
          <h3 className="text-center mb-4">
            Languages I am in <FaHeart /> with
          </h3>
          <div className="row mb-4">
            <div className="col col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>Javascript / NodeJS</h5>
                  <div className="progress skill-meter mb-2 mt-1 ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '90%' }}
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={90}
                    ></div>
                  </div>
                  <p>
                    Javascript is the first programming language I fell in love with. I started
                    learning Javascript as a student in my undergrad. The first application I built
                    is a hangman game using HTML/CSS/JS. It excited me to explore more, by the end
                    of my undergrad I started building full stack applications using NodJS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>Python</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '80%' }}
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={80}
                    ></div>
                  </div>

                  <p>
                    A language which changed the way i wrote code. As a computer science student i
                    am very passionate to learn new things. Python language helped me to explore my
                    interests in the field of web development, Data Science and Machine Learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>Elixir</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={60}
                    ></div>
                  </div>
                  <p>
                    It is the time when I started exploring functional programming languages, I
                    started with Clojure and got scared of the syntactical sugar. Then i started
                    learning elixir which helps me to understand how process isolation helps us to
                    solve most complicated problems in less time using concurrency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h3 className="text-center mb-4 mt-4">Frameworks made my life easy</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>NextJS</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <p>
                    When i am in the hunt for the best tools to build highly scalable NodeJs
                    Applications using React and server-side rendering techniques. I ran in NextJS,
                    which enables me to build more complex design in the frontend, using React and a
                    ton of features like static site generation, server-side rendering, Incremental
                    Static Regenerations. Using NextJS server side functions architectures make me
                    write full stack applications with highly scalability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>Django</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={80}
                    ></div>
                  </div>
                  <p>
                    I believe Django is the perfect framework for building web applications and API
                    Servers. With huge support of django community and the beauty of simplicity in
                    framework gives me confidence to build large scale complex web applications with
                    ease. Django rest framework takes it to one step further. Support for multiple
                    Database Connectors, Easy Database Modeling, Builtin Migration Handling, Admin
                    dashboard for a overview control made mew love this framework even more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>Phoenix</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={50}
                    ></div>
                  </div>
                  <p>
                    When i am looking for tool to create live dashboards, Phoenix live view
                    attracted me to explore phoenix framework. This thing is a beauty, with the help
                    of ecto i can create database models easily and channels can bring life to you
                    frontend screens.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <hr />
          <h3 className="text-center mb-4 mt-4">I build frontend Using</h3>
          <Row>
            <Col md={4}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>SSG like Jekyll, Gatsby</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>React (SPA)</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>VueJS (SPA)</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <h3 className="text-center mb-4 mt-4">Frameworks I use for building Micro Services</h3>
          <Row>
            <Col md={6}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>Express</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>Flask</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <h3 className="text-center mb-4 mt-4">Deployment Strategies I use</h3>
          <Row>
            <Col md={4}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>Webpack Bundling (Static Hosting)</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>Docker</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>CI/CD Pipelines</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <h3 className="text-center mb-4 mt-4">Deployment Platforms I use</h3>
          <Row>
            <Col md={3}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>Heroku</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>Google Cloud</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>AWS</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>Serverless Hosting (Vercel / Netlify)</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <h3 className="text-center mb-4 mt-4">
            Tools I use for Data Aggregation and Data Analysis
          </h3>
          <Row>
            <Col md={4}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>Tabula</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>Numpy</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>Pandas</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <h3 className="text-center mb-4 mt-4">
            Tools I use for Machine Learning and Deep Learning
          </h3>
          <Row>
            <Col md={6}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>Scikit Learn</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="skill-item">
                <div className="text-center">
                  <h5>Tensorflow / TensorflowJS</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </Col>
          </Row> */}
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
