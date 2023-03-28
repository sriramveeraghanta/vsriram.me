import React from 'react';
// next imports
import Head from 'next/head';

function BlogPage() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <section className="section">
        <div className="container">
          <h3 className="text-center">Few Things You Might Like To Read</h3>

          <div className="row">
            <div className="col-md-4">
              <article className="work-item">
                <h5 className="text-primary">CSS tricks that makes web designing easy</h5>
                <p className="text-bold">
                  published on: <span className="text-info">Mar 22, 2017</span>
                </p>
                <a
                  className="btn btn-primary"
                  href="https://medium.com/@sriramveeraghanta/css-tricks-that-makes-web-designing-easy-67f91380b71"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </article>
            </div>
            <div className="col-md-4">
              <article className="work-item">
                <h5 className="text-secondary">How to Structure Large Scale NextJS Applications</h5>
                <p className="text-bold">Coming soon...</p>
              </article>
            </div>
            <div className="col-md-4">
              <article className="work-item">
                <h5 className="text-secondary">Common development Pitfalls working with NodeJS.</h5>
                <p className="text-bold">Coming soon...</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
