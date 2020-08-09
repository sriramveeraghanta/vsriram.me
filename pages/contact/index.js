import React from "react";
// next imports
import Head from "next/head";
// layouts
import BasicLayout from "layouts/BasicLayout";

function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <section>
        <div className="container-fluid">
          <div className="row justify-content-center pt-4 pb-4">
            <div className="col-7">
              <h3>Contact</h3>
            </div>
            <div className="col-4">Icons</div>
          </div>
        </div>
      </section>
    </div>
  );
}

ContactPage.Layout = BasicLayout;

export default ContactPage;
