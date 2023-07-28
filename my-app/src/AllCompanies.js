import "./App.css";
import NewHeader from "./NewHeader";
import Footer from "./Footer";
import CompanyTile from "./CompanyTile";
// import companyList from "./companyList.json";

function App2() {
  /////////////////// to make it random
  for (var a = [], i = 0; i < 9; ++i) a[i] = i;

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp,
      current,
      top = array.length;
    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    return array;
  }

  a = shuffle(a);
  const companyArray = a;
  ///////////////////

  const newArray = Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 9)
  );

  const renderListOfNumbers = (numbers) => {
    return numbers.map((newNumber) => <CompanyTile item={newNumber} />);
  };

  return (
    <div>
      <NewHeader />
      <main role="main">
        {/* <!-- Welcome Message --> */}
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Air Travel Tech Jobs</h1>
            <p className="lead text-muted">
              Your #1 Source for Software Engineering Jobs In Aviation
            </p>
            <p>
              {/* <i>
                Note to self: Add some cool background pic, ideally rotating
              </i> */}
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

        {/* filters */}
        <div className="filterbox">
          <div className="row">
            <div className="col-md-3">
              <p className="filter-section-header">Remote</p>
              <ul className="filters-ul">
                <li
                  className="filter-section-category"
                  data-tag-slug="isRemote"
                >
                  <p className="filters-li">Remote</p>
                </li>
                <li
                  className="filter-section-category"
                  data-tag-slug="hybridRemote"
                >
                  <p className="filters-li">Hybrid</p>
                </li>
                <li
                  className="filter-section-category"
                  data-tag-slug="notRemote"
                >
                  <p className="filters-li">On-site</p>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <p className="filter-section-header">Location</p>
              <p className="filter-section-category">Europe</p>
              <p className="filter-section-category">North America</p>
              <p className="filter-section-category">South America</p>
              <p className="filter-section-category">Asia Australia</p>
              <p className="filter-section-category">Middle-East</p>
            </div>
            <div className="col-md-3">
              <p className="filter-section-header">Industry</p>
              <p className="filter-section-category">Manufacturing</p>
              <p className="filter-section-category">Airline</p>
              <p className="filter-section-category">Tracker</p>
            </div>
            <div className="col-md-3">
              <p className="filter-section-header">Cool</p>
              <p className="filter-section-category">Cool</p>
              <p className="filter-section-category">Less Cool</p>
            </div>
          </div>
        </div>

        {/* <!-- Companies --> */}
        <div className="album py-5 bg-light ">
          <div className="container homepage-wrapper">
            <div className="row">
              {renderListOfNumbers(companyArray)}

              {/* <CompanyTile item="0" />
              <CompanyTile item="1" />
              <CompanyTile item="2" />
              <CompanyTile item="3" />
              <CompanyTile item="4" />
              <CompanyTile item="5" />
              <CompanyTile item="6" />
              <CompanyTile item="7" />
              <CompanyTile item="8" /> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App2;
