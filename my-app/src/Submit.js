import "./App.css";
import NewHeader from "./NewHeader";
import Footer from "./Footer";
import React from "react";
import departingPlane from "./images/departingplane.jpeg";
import a318pic from "./images/a318.jpeg";
import a380pic from "./images/a380.jpeg";
import PayButton from "./PayButton";

function About() {
  return (
    <div>
      <title>Tab title?</title>

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
            <h1>Fasten your seatbelts</h1>
            <p className="lead text-muted">
              Your new colleagues are about to take off!{" "}
            </p>
          </div>
        </section>
        <div className="album py-5 bg-light ">
          <div className="container homepage-wrapper">
            <h1>Submit ✈ Roles</h1>
            <p>
              There are thousands of people with a special passion for air
              travel, airplanes and aviation technology.{" "}
            </p>

            <p>I know,</p>
            <p> I'm one of them.</p>

            <p>
              If you want to attract not just any employee, but someone who goes
              the extra mile, someone who knows his field from years of
              passionate exploration, someone who wants to change the world, ...
            </p>
            <p>
              Then consider sharing your open tech roles on Air Travel Tech
              Jobs.
            </p>
            <br></br>

            <div className="row">
              <div className="col-md-3">
                <img
                  src={a318pic}
                  className="bd-placeholder-img card-img-top"
                />
              </div>
              <div className="col-md-9">
                <p>
                  <b>Simple Package:</b> 1 Role, <s>One Year</s>
                  {"  "}
                  <b style={{ color: "red", fontSize: "1.2rem" }}>Forever</b>:
                  387 USD
                </p>

                {/* <PayButton link="https://buy.stripe.com/4gwcOq8pA99QfRK144" /> */}
                {/* test product */}
                <PayButton link="https://buy.stripe.com/aEUbKm5dogCi20U7st" />
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-3">
                <img
                  src={a380pic}
                  className="bd-placeholder-img card-img-top"
                />
              </div>
              <div className="col-md-9">
                <p>
                  <b>Heavy Package:</b> 5 Roles, <s>One Year</s>
                  {"  "}
                  <b style={{ color: "red", fontSize: "1.2rem" }}>Forever</b>:
                  1.487 USD
                </p>
              </div>
            </div>
            <br></br>

            <p>
              For questions, feel free to reach out on{" "}
              <a href="mailto:joris@jorisfalter.com">joris@jorisfalter.com</a>.{" "}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
