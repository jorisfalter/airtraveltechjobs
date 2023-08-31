import "./App.css";
import NewHeader from "./NewHeader";
import Footer from "./Footer";
import React from "react";
import departingPlane from "./images/departingplane.jpeg";
import { Link } from "react-router-dom";

function AirTravelTechInnovation() {
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
            <h1>Blog</h1>
            <p className="lead text-muted"></p>
          </div>
        </section>

        {/* article */}
        <div className="album py-5 bg-light ">
          <div className="container homepage-wrapper">
            <h1>What's happening in Air Travel</h1>
            <p>
              While building this platform, I got a little bit of a feeling of
              where the industry is heading.
            </p>
            <p>Let's braindump:</p>
            <h4>(1) I expect the airline industry to remain pretty constant</h4>
            <p>
              While airlines come and go, I don't expect to add or remove any
              airlines to this website on a frequent basis. This is a rather
              slow-moving industry. Unless a new technology (electric planes) or
              a new business model (like low-cost) pops up, I don't expect I
              have to add many new cool airlines popping up out of nowhere in
              the next few months (or even years).
            </p>
            <h4>(2) Drone Taxis are a highly innovative field.</h4>
            <p>
              On this website you can find Joby. But there's also Archer, Ehang,
              Vertical Aerospace, Volocopter, ...
            </p>
            <p>
              There's two sides to the drone taxi business: the manufacturing
              part, and the taxi service part. The manufacturing part sees a
              couple of players who have been building for the last 6-7 years.
              It's unexpected to suddenly see new players rising in this field.
            </p>
            <p>
              The taxi service part however, might lead to more intense
              competition.
            </p>
            <p>
              Most of beforementioned companies intend to to both manufacturing
              and the taxi service part. Nevertheless, it seems to be expected
              that some of them eventually will double down on manufacturing and
              leave the taxi operations part to 3rd parties.{" "}
            </p>
            <p>
              Other use cases could be to sell them to private owners for
              private transport. Lilium is one of the companies who has a
              network of commercial partners for this kind of use cases.
            </p>
            <h4>(3) Electric planes are a niche for now</h4>
            <p>
              Technology doesn't allow yet for big Boeings or Airbus to fly
              fully electrical across the world (batteries too heavy and take
              too much space for that duration, also no electric jet engines
              yet).
            </p>
            <p>
              But in the propellor niche for short distance there is an
              opportunity.
            </p>
            <p>
              Short distance flights are in general not commercially
              interesting, it's easier by car or train.
            </p>
            <p>Except when you have to cross water.</p>
            <p>
              We're entering the field of inter-island transport now. Places
              like the Maldives, French Polynesia, the UK or probably many
              places in the US or Canada I'm not familiar with.
            </p>
            <p>
              Regent is the new kid on the block, focusing on electric sea
              planes.
            </p>
            <p>
              And Sweden-based Heart Aerospace is the new challenger in small
              propeller aircraft for Cessna (who are also building an electric
              aircraft) and Pilatus (who don't mention any electric aircraft yet
              on their website).{" "}
            </p>
            <h4>(4) Technology suppliers</h4>
            <p>
              I found a cool company called Daedalean focusing on autonomeous
              flying. I think there are many companies like this, but they are
              difficult to find.{" "}
            </p>
            <p>
              I assume that to deliver to airlines you need a rather big
              company.
            </p>
            <p>
              I assume Daedalean focuses on small aircraft, hence the
              opportunity to do it with a relatively small company.{" "}
            </p>
            <p>
              I would love to add more companies to this website which have a
              startup feel and use technology to improve the flying experience.{" "}
            </p>
            <h4>
              (5) Pure tech companies: there is a big moat around ticket booking
              systems, there are some other tech companies
            </h4>
            <p>
              Everyone who ever explored doing something in flight schedules,
              ticket bookings, ... will know it's a highly competitive field,
              with a lot of big players guarding their fiefdom.{" "}
            </p>
            <p>
              Players like Kayak, Amadeus, Google, ... have access to price,
              flight schedules, ... but they are not accessible to the public.
            </p>
            <p>
              I tried building it with{" "}
              <a href="www.flightsforflaneurs.com">Flights For Flaneurs</a> but
              it didn't work.
            </p>
            <p>
              A good example is Flightconnections, a cool website, useful
              information, a fresh look at travel, but given the amount of ads
              he throws, my assumption is that it's a costly business to keep it
              running.
            </p>
            <p>
              The booking user experience when booking a flight with Lufthansa
              or Airasia is probably done inhouse, but I'm not certain of this.
            </p>
            <p>
              There are some niche technology companies (who also protect their
              moat), like FlightRadar24 (which is still a startup) or
              FlightAware (which was a startup but is now part of the way bigger
              Collins Aerospace group).
            </p>
            <h4>(6) Supersonic is a big question mark</h4>
            <p>
              I don't think the economics changed ever since Concorde. You still
              need to burn a massive amount of fuel to break through the sound
              barrier.{" "}
            </p>
            <p>And fuel prices didn't decrease.</p>
            <p>So I have the feeling the economics still don't make sense.</p>
            <p>
              But I might be wrong. I don't know this field well enough to know
              how much improvement is possible compared to the original
              Concorde.
            </p>
            <br></br>
            <br></br>
            <p>
              Back to <Link />
              <Link to="/About">About Page</Link>.
            </p>

            <p></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AirTravelTechInnovation;
