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
          <h3 className="text-center">Somethings you might like.</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">CSS tricks that makes web designing easy</h3>
                  <p className="card-text text-primary">Mar 22, 2017</p>
                  <button className="btn btn-primary">Visit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
