import "./App.css";
import NewHeader from "./NewHeader";
import Footer from "./Footer";
import React from "react";
import departingPlane from "./images/departingplane.jpeg";

function About() {
  return (
    <div>
      <NewHeader />
      <main role="main">
        {/* <!-- Welcome Message --> */}
        <section
          className="jumbotron text-center"
          style={{
            backgroundImage: "url(" + departingPlane + ")",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <h1>Air Travel Tech Jobs</h1>
            <p className="lead text-muted">
              Your #1 Source for Software Engineering Jobs In Aviation
            </p>
          </div>
        </section>

        <i>
          Inspired by <a href="www.keyvalues.com">Key Values</a>
        </i>

        {/* <!-- Companies --> */}
        <div className="album py-5 bg-light ">
          <div className="container homepage-wrapper">
            <div className="row"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
