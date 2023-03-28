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
                    <div className="progress-bar w-100" role="progressbar"></div>
                  </div>
                  <p>
                    I started learning Javascript in my Under-graduation and immediately fell in
                    love with it. The very first application I built was a Hangman game using
                    HTML/CSS/JS. It inspired me to explore further and by the end of my
                    Under-graduation I started building full stack applications using NodeJS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>Python</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div className="progress-bar w-100" role="progressbar"></div>
                  </div>
                  <p>
                    Python enhanced my code programing abilities to a great extent. As a computer
                    science student, I am very passionate to learn new technologies and Python
                    helped me to explore my interests in the field of Web Development, Data Science
                    and Machine Learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>Elixir</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div className="progress-bar w-100" role="progressbar"></div>
                  </div>
                  <p>
                    When I was exploring functional programming languages, I started with Clojure
                    which got me intimidated due to its syntactical sugar. So, I shifted to Elixir
                    which helped me to understand how process isolation helps to solve the most
                    complicated problems in lesser time using concurrency.
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
                    <div className="progress-bar w-100" role="progressbar"></div>
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
                    <div className="progress-bar w-100" role="progressbar"></div>
                  </div>
                  <p>
                    I feel Django is a great framework for building web applications and API
                    Servers. The beauty of Django is its supportive community and the simplicity of
                    its framework which encouraged me to build large scale complex web applications.
                    Django REST framework takes it to the next level. Support for multiple Database
                    Connectors, Easy Database Modelling, Built-in Migration Handling, Admin
                    dashboard for an overview control made this framework even more fascinating.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>Phoenix</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div className="progress-bar w-100" role="progressbar"></div>
                  </div>
                  <p>
                    When I was looking for a tool to create live dashboards, Phoenix live view
                    interested me to explore its framework. With the help of Ecto, I created
                    database models with ease and channels brought life to the frontend screens.
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
                    <div className="progress-bar w-100" role="progressbar"></div>
                  </div>
                  <p>
                    Static Site Generate tools are great while working on large static web pages.
                    Jekyll allows to create reusable layouts which reduces repetitive work and
                    increases consistency across the website. As building modern day Javascript
                    frameworks is increasing in popularity, Gatsby is one of the SSG tools using
                    React which makes websites more intuitive. Further, Gatsby supports plugins to
                    support search engine optimization (SEO).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>React (SPA)</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div className="progress-bar w-100" role="progressbar"></div>
                  </div>
                  <p>
                    When I started building web applications using Javascript frameworks, Angular
                    was my go-to framework because of its MVC architecture and huge support from the
                    community. But React changed my perception. It made me focus on the application
                    views and data binding using XHTTP requests with great customization
                    capabilities. The simplicity of the library is my favorite.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>VueJS (SPA)</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div className="progress-bar w-100" role="progressbar"></div>
                  </div>
                  <p>
                    While working on React, the thing that bothered me was the amount of Javascript
                    required. VueJS solved this issue with view templates. So, I explored the
                    documentation and, in my experience, so far VueJS is better when compared with
                    other Javascript libraries. Smaller build sizes and better performance makes me
                    choose VueJS over others.
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
                    <div className="progress-bar w-100" role="progressbar"></div>
                  </div>
                  <p>
                    While experimenting with NodeJS Http server, Express framework really drew my
                    attention with its simplicity. Working with relational databases and Express was
                    a bit challenging to me. So, I chose NoSQL and enjoyed working with Express and
                    MongoDB. I built a few applications using MERN stack. Though, I feel express is
                    not suitable for building large scale projects.
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
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                  <p>
                    Flask is the one of the best minimalistic web frameworks out there. It works
                    flawlessly irrespective of the type of database. I am a great fan of the flask
                    creator - Armin Ronacher. With great support from the Python community, Flask is
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
                    <div className="progress-bar w-100" role="progressbar"></div>
                  </div>
                  <p>
                    I always wanted to build my static website using the features of modern
                    Javascript modules. Webpack and Babel are helpful in creating a minimized
                    bundle. While I was building a tic-tac-toe game using HTML, CSS and Javascript,
                    Webpack helped me to modularize the game logic and abstract it from the HTML
                    presentation layer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>Docker</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div className="progress-bar w-100" role="progressbar"></div>
                  </div>
                  <p>
                    Operating system virtualization and containerization fascinates me. Docker is a
                    unique tool which allows to run applications on any platform. Docker Compose
                    helps to run multiple Docker containers seamlessly. Once I understood its
                    functionality, I was able to deploy the backend applications effortlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item">
                <div className="text-center">
                  <h5>CI/CD Pipelines (Github Actions)</h5>
                  <div className="progress skill-meter mb-2 mt-1">
                    <div className="progress-bar w-100" role="progressbar"></div>
                  </div>
                  <p>
                    When I am working with my team, we often run into issues while pulling each
                    other’s code. Sometimes, unstable code and broken test cases gets checked-in
                    inadvertently. Continuous Integration (CI) made it easy to verify my teams work
                    using workflow checks. Continuous Deployment (CD) helps to deploy applications
                    automatically after the checks are passed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
