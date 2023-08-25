import "./App.css";
import NewHeader from "./NewHeader";
import Footer from "./Footer";
import React from "react";
import departingPlane from "./images/departingplane.jpeg";
import randomAirportPic from "./images/randomairport.png";
import flightsforflaneursPic from "./images/flightsforflaneurs.png";

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
            <h1>Fly Away From LinkedIn</h1>
            <p className="lead text-muted">
              Find your new role on Air Travel Tech Jobs instead!
            </p>
          </div>
        </section>
        <p>
          Welcome to Air Travel Tech Jobs, a job board for everyone interested
          in Air Travel and Technology.
        </p>

        <p></p>

        <p>I'm vetting these companies.</p>
        <p>Based on which companies I think I would like.</p>
        <p>Obviously, this is highly subjective!</p>
        <p>
          But I don't want another dull job board, I want opinions, character,
          discussion, ...
        </p>
        <p>
          {" "}
          I want people to help people find interesting roles at fun companies!
        </p>

        <p>If I make a mistake, I'll add it here.</p>

        <p>
          This is a slow project. I'll provide regular updates to the website,
          nevertheless cool air travel companies don't just pop up out of the
          ground every week.{" "}
        </p>
        <p>
          Best case scenario: with new developments around drones transporting
          people and electric planes, we might be on the threshold of a new
          flying revolution. Fingers crossed.
        </p>

        <h1>Community</h1>
        <p>Feel free to join the Slack group. </p>

        <h1>Blog</h1>
        <p>The rise of the German drone taxi industry. Coming Soon.</p>
        <p>Where is the innovation happening in Air Travel. Coming Soon.</p>
        <h1>Fun</h1>

        {/* <!-- fun --> */}
        <div className="album py-5 bg-light ">
          <div className="container homepage-wrapper">
            <div className="row">
              <div className="col-md-5">
                <a href={"https://randomairport.onrender.com/"} target="_blank">
                  <div className="card card-sm mb-4 shadow-sm">
                    {" "}
                    <div className="imageContainer">
                      <img
                        src={randomAirportPic}
                        className="bd-placeholder-img card-img-top"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-7">
                <a href={""}>Random Airport</a> allows you to scroll through
                aerial pics of the world's airports.
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <a href={"http://www.flightsforflaneurs.com/"} target="_blank">
                  <div className="card card-sm mb-4 shadow-sm">
                    {" "}
                    <div className="imageContainer">
                      <img
                        src={flightsforflaneursPic}
                        className="bd-placeholder-img card-img-top"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-7">
                <a href={"http://www.flightsforflaneurs.com/"}>
                  Flights For Flaneurs
                </a>{" "}
                allows you to find all possible destinations based on when you
                want to fly.
              </div>
            </div>
          </div>
        </div>
        <i>
          Inspired by <a href="www.keyvalues.com">Key Values</a>, RemoteOK, and
          many other job boards.
        </i>
      </main>
      <Footer />
    </div>
  );
}

export default About;
