import React from "react";

function OldPage(props) {
  return (
    <div>
      <section id="home">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-4 text-center">
              <img
                class="profile-pic-img img-fluid"
                src="assets/images/profile-pic.jpg"
                width="300px;"
              />
            </div>
            <div class="col-md-6">
              <div class="row h-100">
                <div class="col align-self-center">
                  <h3>Sriram Veeraghanta</h3>
                  <p>
                    I'm a passionate developer interested in web development, mobile application
                    development, graphics, real-time rendering, data science and data visualization.
                    I believe in right technology and best programming practices are necessary for
                    reliability and scalability of a product. I am currently working as head of
                    operations in <a href="https://caravel.co.in/">Caravel Labs</a>.
                  </p>
                  <p>
                    <a
                      class="social-icons"
                      href="mailto:veeraghanta.sriram@gmail.com"
                      target="_blank"
                    >
                      <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                    </a>
                    &nbsp;&nbsp;
                    <a
                      class="social-icons"
                      href="https://github.com/sriramveeraghanta/"
                      target="_blank"
                    >
                      <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                    </a>
                    &nbsp;&nbsp;
                    <a
                      class="social-icons"
                      href="https://www.linkedin.com/in/sriram-veeraghanta-22933798/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                    </a>
                    &nbsp;&nbsp;
                    <a
                      class="social-icons"
                      href="https://www.facebook.com/issriramv"
                      target="_blank"
                    >
                      <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
                    </a>
                    &nbsp;&nbsp;
                    <a class="social-icons" href="https://twitter.com/issriramv" target="_blank">
                      <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
                    </a>
                    &nbsp;&nbsp;
                    <a
                      class="social-icons"
                      href="https://medium.com/@veeraghanta.sriram"
                      target="_blank"
                    >
                      <i class="fa fa-medium fa-2x" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="projects" id="projects">
        <div class="container">
          <h2 class="text-center">Projects</h2>
          <hr class="us-line" />
          <div class="row justify-content-center">
            <div class="col-md-10">
              <dl>
                <dt>Workplace (Django, VueJS)</dt>
                <dd>
                  A project management and team experience platform help companies evolve their
                  performance management with reviews, real-time feedbacks, clear goal setting and
                  one-on-one tools.{" "}
                </dd>

                <dt>Onto (Django, VueJS)</dt>
                <dd>
                  Forms made easy, project designed for receiving taps based inputs from users and
                  applying data science methods for interpreting data.
                </dd>

                <dt>Hoppercamp (Django, ReactJS)</dt>
                <dd>
                  Enabling clean and intuitive learning interface for focusing on what is needed. An
                  online learning system with articles, sample codes, and quizzes.
                </dd>

                <dt>Tuttor (Django, ReactJS)</dt>
                <dd>
                  Providing a classroom ecosystem between the students and tutors, using live video
                  lectures, screen sharing, chat screen and whiteboard.
                </dd>

                <dt>Collabcode (NodeJS)</dt>
                <dd>
                  Collaborative online text editor with syntax highlighter. Each user is provided
                  with a random workspace which can be shared to others for collaboration.
                </dd>

                <dt>Crate (NodeJS)</dt>
                <dd>
                  Providing interface and secure permission for users to access files locally using
                  a local server. It is was deployed and tested in college. This project is now
                  converted to a NPM module. (still working on it)
                </dd>

                <dt>Trippers (Django API’s, Android)</dt>
                <dd>A travel guide application with major cities and best places to visit.</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <hr />
          <span>sriram veeraghanta</span>
          <span class="float-right">
            <a class="social-icons" href="mailto:veeraghanta.sriram@gmail.com" target="_blank">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
            &nbsp;
            <a class="social-icons" href="https://github.com/sriramveeraghanta/" target="_blank">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            &nbsp;
            <a
              class="social-icons"
              href="https://www.linkedin.com/in/sriram-veeraghanta-22933798/"
              target="_blank"
            >
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            &nbsp;
            <a class="social-icons" href="https://www.facebook.com/issriramv" target="_blank">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            &nbsp;
            <a class="social-icons" href="https://twitter.com/issriramv" target="_blank">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            &nbsp;
            <a class="social-icons" href="https://medium.com/@veeraghanta.sriram" target="_blank">
              <i class="fa fa-medium" aria-hidden="true"></i>
            </a>
          </span>
        </div>
      </section>
    </div>
  );
}

export default OldPage;
