import "./App.css";
import NewHeader from "./NewHeader";
import Footer from "./Footer";
import React from "react";
import departingPlane from "./images/departingplane.jpeg";
import randomAirportPic from "./images/randomairport.png";
import flightsforflaneursPic from "./images/flightsforflaneurs.png";
import flightradarguesstheairportPic from "./images/flightradarguesstheairportPic.png";

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

            <p>I know, I'm one of them.</p>

            <p>
              If you want to attract not just any employee, but someone who goes
              the extra mile, someone who knows his field from years of
              passionate exploration, someone who wants to change the world, ...
            </p>
            <p>
              Then consider sharing your open tech roles Air Travel Tech Jobs.
            </p>

            <p>
              You can share your roles by contacting me on{" "}
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
