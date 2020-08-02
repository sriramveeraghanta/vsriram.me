import React from "react";
// next imports
import Head from "next/head";
// layouts
import BasicLayout from "layouts/BasicLayout";
// react bootstrap
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <Head>
        <title>Sriram Veeraghanta</title>
        <link rel="icon" href="/favicon.ico" />
        <script src=""></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.3.0/snap.svg-min.js"></script>
        <script src="/static/js/bubble-bg.js"></script>
      </Head>
      <div className="index-background">
        <canvas id="container" role="main"></canvas>
        <div className="content">
          <h1 className="title">Sriram Veeraghanta</h1>
          <p className="desc">Web Developer, Product Designer and Machine Learning Enthusiast.</p>
          <ul className="contact">
            <li>
              <a href="mailto:jonas@badalic.com">jonas@badalic.com</a>
            </li>
            <li>
              <a target="_top" href="https://codepen.io/JonasB/">
                Codepen
              </a>
            </li>
            <li>
              <a target="_top" href="https://twitter.com/JonasBadalic">
                Twitter
              </a>
            </li>
            <li>
              <a target="_top" href="https://si.linkedin.com/in/jonasbadalic">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="blur blurTop">
          <canvas className="canvas" id="blurCanvasTop"></canvas>
        </div>
        <div className="blur blurBottom">
          <canvas width="1000px" height="1000px" className="canvas" id="blurCanvasBottom"></canvas>
        </div>
      </div>
    </>
  );
}

HomePage.Layout = BasicLayout;

export default HomePage;
