import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
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
            <p>Note to self: Add some cool background pic, ideally rotating</p>
          </div>
        </section>

        {/* <!-- Featured Companies --> */}
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <a href="/">Featured Companies</a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">This is a cool company</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">This is another cool company.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      {/* <!-- <small className="text-muted">9 mins</small> --> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      KLM
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      Why Cool? Probably one of the most efficient airlines in
                      the world, maximising using tech to optimise their
                      operations even more.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      {/* <!-- <small className="text-muted">9 mins</small> --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Filters --> */}
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Filters</h1>

            <p>
              <a href="#" className="btn btn-primary my-2">
                Many more filter buttons here
              </a>
              <a href="#" className="btn btn-secondary my-2">
                Many Many more filter buttons here
              </a>
            </p>
          </div>
        </section>

        {/* <!-- Jobs --> */}
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <a href="">All Jobs</a>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">This is a job listing.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">This is another job listing.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">This is the third job.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
