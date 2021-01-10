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
            Languages I am in <FaHeart color="#dc3545" /> with
          </h3>
          <div className="row mb-5">
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
                    of my undergrad I started building full stack applications using NodeJS.
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
                      style={{ width: '60%' }}
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
          {/* <hr /> */}
          <h3 className="text-center mb-4 mt-4">Frameworks made my life easy</h3>
          <div className="row mb-5">
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
                      style={{ width: '100%' }}
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
                      style={{ width: '80%' }}
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
                      style={{ width: '50%' }}
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
          <h3 className="text-center mb-4 mt-4">I build frontend Using</h3>
          <div className="row mb-5">
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>SSG like Jekyll, Gatsby</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                  <p>
                    Static Site Generate tools are really helpful when i am working on large static
                    web pages. Jekyll allows us to create reusable layouts which reduces your work
                    and increases consistency across the website. As building modern day javascript
                    frameworks are increasing the popular, Gatsby is one of the SSG tools using
                    react, which make your website more intuitive using javascript actions. Also
                    Gatsby support few plugins to Optimize your website for search engines.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>React (SPA)</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                  <p>
                    When start building web application using javascript frameworks, angular was my
                    go to framework, because of the MVC architecture and huge support from the
                    community. But React changed everything, It made me focus on the views of the
                    application and binding data using XHTTP requests makes my web application some
                    customizable. The simplicity of the library made me fall in love with it.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>VueJS (SPA)</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={90}
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                  <p>
                    When i am closing working on react, one thing that always worries me is, there
                    is a lot of javascript. Vue js really solved this using view templates. So i
                    quickly explored the documentation and loved. So far i can say Vue js has the
                    best documentation if you compare with other javascript libraries. Smaller
                    builds sizes and better performance than other frameworks makes me choose Vue
                    over other.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-center mb-4 mt-4">Frameworks I use for building Micro Services</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="skill-item">
                <div className="text-center">
                  <h5>Express</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={80}
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                  <p>
                    When i started experimenting with NodeJS Http server. Express framework really
                    draws my attention with the simplicity and ease of use. I always find
                    difficulties working with relational databases and express. So my next option is
                    going with NoSQL, had a great time working with express and mongodb. Build few
                    application using MERN stack. I feel express is not suitable if you are building
                    large scale projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-item">
                <div className="text-center">
                  <h5>Flask</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  <p>
                    This the one of the best minimalistic web framework out there. No matter what
                    kind of database you use flask works flawlessly. I am great fan of the flask
                    create armin ronacher. With a great support from python community flask is
                    always a great choice to get started.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-center mb-4 mt-4">Deployment Strategies I use</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>Static Site Hosting (Webpack)</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                  <p>
                    I always wanted to build my static website using the features of modern
                    javascript modules. Webpack and babel helps me to create a minimized bundle.
                    When i am building simple tic-tac-toa game using HTML, CSS and Javascript
                    webpack help me to modularize my game logic and separate it from the HTML
                    presentation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>Docker</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={50}
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                  <p>
                    I am always fascinated about the operating system virtualization and
                    containerization. Docker is one of kind tool the allows me to run my application
                    on any platform. Using Docket Compose we can run multiple docket containers
                    seamlessly. Once i understand the beauty of it really blew my mind how easily i
                    can deploy my backend applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>CI/CD Pipelines (Github Actions)</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  <p>
                    When i am working with team i often run into some issues when i am pulling my
                    teammates code. Some times they push unstable code and sometime with broken test
                    cases. Continuos Integration made it easy to verify my teams work using workflow
                    checks. Continuos Deployment helps me to deploy my application automatically
                    after my checks are passed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <hr />
          <h3 className="text-center mb-4 mt-4">Deployment Platforms I use</h3>
          <div className="row">
            <div className="col-md-3">
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
            </div>
            <div className="col-md-3">
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
            </div>
            <div className="col-md-3">
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
            </div>
            <div className="col-md-3">
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
            </div>
          </div>
          <hr />
          <h3 className="text-center mb-4 mt-4">
            Tools I use for Data Aggregation and Data Analysis
          </h3>
          <div className="row">
            <div className="col-md-4">
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
            </div>
            <div className="col-md-4">
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
            </div>
            <div className="col-md-4">
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
            </div>
          </div>
          <hr />
          <h3 className="text-center mb-4 mt-4">
            Tools I use for Machine Learning and Deep Learning
          </h3>
          <div className="row">
            <div className="col-md-6">
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
            </div>
            <div className="col-md-6">
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
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
