import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import CompanyTile from "./CompanyTile";

function App2() {
  return (
    <div>
      <Header />
      <main role="main">
        {/* <!-- Welcome Message --> */}
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Air Travel Tech Jobs</h1>
            <p className="lead text-muted">
              Your #1 Source for Software Engineering Jobs In Aviation
            </p>
            <p>
              <i>
                Note to self: Add some cool background pic, ideally rotating
              </i>
            </p>
          </div>
        </section>

        {/* <!-- Filters --> */}
        {/* <section className="jumbotron text-center">
          <div className="container">
            <h1>Filters</h1>
            Industry
            <p>
              <a href="/" className="btn btn-primary my-2">
                Manufacturing
              </a>
              <a href="/" className="btn btn-secondary my-2">
                OTA
              </a>
            </p>
          </div>
        </section> */}

        {/* <!-- Companies --> */}
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <CompanyTile item="0" />
              <CompanyTile item="1" />
              <CompanyTile item="2" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App2;
