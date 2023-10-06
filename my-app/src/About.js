import "./App.css";
import NewHeader from "./NewHeader";
import Footer from "./Footer";
import React from "react";
import departingPlane from "./images/departingplane.jpeg";
import randomAirportPic from "./images/randomairport.png";
import flightsforflaneursPic from "./images/flightsforflaneurs.png";
import flightradarguesstheairportPic from "./images/flightradarguesstheairportPic.png";
import a380Pic from "./images/wheredoesthea380fly.png";
import mezelfijsbad from "./images/mezelfijsbad.jpeg";
import { Link } from "react-router-dom";

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

        {/* introduction */}
        <div className="album py-5 bg-light ">
          <div className="container homepage-wrapper">
            <img src={mezelfijsbad} className="mezelfijsbadpic" />
            <br></br>
            <br></br>

            <h2>Hi, I'm Joris &#128075;</h2>
            <br></br>
            <p>Welcome to Air Travel Tech Jobs.</p>

            <p>
              I started this site because I was building Air Travel related apps
              (see <i>fun</i> below) and figured it would be cool to work in the
              air travel industry.
            </p>

            <p></p>

            <p>I'm vetting these companies.</p>
            <p>Based on which companies I think I would like.</p>
            <p>Obviously, this is highly subjective!</p>
            <p>
              But I don't want another dull job board, I want opinions,
              character, discussion, ...
            </p>
            <p>
              {" "}
              I want people to help people find interesting roles at fun
              companies!
            </p>

            <p>If I make a mistake, I'll add it here.</p>

            <p>
              This is a slow project. I'll provide regular updates to the
              website, nevertheless cool air travel companies don't just pop up
              out of the ground every week.{" "}
            </p>
            <p>
              Best case scenario: with new developments around drones
              transporting people and electric planes, we might be on the
              threshold of a new flying revolution. Fingers crossed.
            </p>

            <br></br>

            <h1>🗣️ Community</h1>
            <p>
              Feel invited to join the{" "}
              <a href="https://join.slack.com/t/airtraveltechjobs/shared_invite/zt-21xgqak53-plOeFRrOFt1BDqB_MLzJDw">
                Air Travel Tech Jobs Slack community
              </a>
              .{" "}
            </p>
            <br></br>

            <h1>📖 Blog</h1>
            <p>
              The Germans still know how to manufacture. <i>Coming Soon.</i>
            </p>
            <p>
              Where is the innovation happening in Air Travel.{" "}
              <i>
                <Link to="/AirTravelTechInnovation">Read Post</Link>
              </i>
            </p>
            <br></br>
            <h1>🎉 Fun</h1>

            {/* <!-- fun --> */}

            <div className="row mt-4">
              <div className="col-md-5 ">
                <a href={"https://randomairport.onrender.com/"} target="_blank">
                  <div className="card card-sm shadow-sm">
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
                <br></br>
                <br></br>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-5">
                <a href={"http://www.flightsforflaneurs.com/"} target="_blank">
                  <div className="card card-sm shadow-sm">
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
            <div className="row mt-4">
              <div className="col-md-5">
                <a href={"https://www.wheredoesthea380fly.com"} target="_blank">
                  <div className="card card-sm shadow-sm">
                    {" "}
                    <div className="imageContainer">
                      <img
                        src={a380Pic}
                        className="bd-placeholder-img card-img-top"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-7">
                A map to check which routes the A380 flies! <br></br>
                <br></br>They are great planes to fly on, but they are being
                retired left and right. <br></br>
                <br></br>
                <a href={"https://www.wheredoesthea380fly.com"}>This map</a>,
                based on flights flown in last 7 days with A380s, helps you plan
                your travels towards maximum A380 exposure :).{" "}
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-5">
                <a
                  href={
                    "https://twitter.com/hashtag/FR24quiz?src=hashtag_click&f=live"
                  }
                  target="_blank"
                >
                  <div className="card card-sm shadow-sm">
                    {" "}
                    <div className="imageContainer">
                      <img
                        src={flightradarguesstheairportPic}
                        className="bd-placeholder-img card-img-top"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-7">
                From time to time FlightRadar24 plays{" "}
                <a
                  href={
                    "https://twitter.com/hashtag/FR24quiz?src=hashtag_click&f=live"
                  }
                >
                  guess the Airport on Twitter
                </a>
                .{" "}
              </div>
            </div>
            <br></br>
            <br></br>

            <h1> 🙏 Special Thanks</h1>

            <p>
              <br></br>
              <i>
                Inspired by <a href="www.keyvalues.com">Key Values</a>,{" "}
                <a href="https://remoteok.com/">RemoteOK</a>, and many other job
                boards.
              </i>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
