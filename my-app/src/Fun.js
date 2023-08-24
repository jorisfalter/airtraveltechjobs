import "./App.css";
import NewHeader from "./NewHeader";
import Footer from "./Footer";
import React from "react";
import departingPlane from "./images/departingplane.jpeg";

function Fun() {
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
            <h1>Fun</h1>
            <p className="lead text-muted">
              Your #1 Source for <s>Software Engineering Jobs</s> Fun In
              Aviation
            </p>
          </div>
        </section>

        {/* it should look like a blog
          clickable pics on the left
          some comments on the right */}

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

export default Fun;
