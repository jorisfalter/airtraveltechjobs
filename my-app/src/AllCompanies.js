import "./App.css";
import NewHeader from "./NewHeader";
import Footer from "./Footer";
import CompanyTile from "./CompanyTile";
import React, { useState, useEffect } from "react";
import companyList from "./companyList.json";

// import companyList from "./companyList.json";

var b = 0;

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

  // to avoid rerendering after initial load
  if (b === 0) {
    b = shuffle(a);
  }
  const companyArray = b;

  ///////////////////
  const newArray = Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 9)
  );

  // handle the click on the li items in the filterbox
  const [activeIndices, setActiveIndices] = useState([]); // State to track active indices

  const handleClick = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index)); // Remove index if already active
    } else {
      setActiveIndices([...activeIndices, index]); // Add index if not active
    }
  };

  // fetch all the variables for each company
  var companyVariables = [];
  for (var i = 0; i < companyList.length; i++) {
    companyVariables[i] = [
      [companyList[i].companyName],
      [companyList[i].remote],
    ];
  }
  console.log(companyVariables);

  // tempCompanyData is only the remote data from KLM
  var tempCompanyData = companyList[0].remote;
  console.log("hier log ik activeIndices: " + activeIndices);

  // render the tiles
  var matchingListOfFiltersForThisCompany = [];
  var matchingListOfFiltersForAllCompanies = [];

  const renderListOfNumbers = (numbers) => {
    // when no filters
    if (activeIndices == "") {
      return numbers.map((newNumber) => <CompanyTile item={newNumber} />);
    }

    // when filters applied
    else {
      // for (var i = 0; i < activeIndices.length; ++i) {
      //   for (var j = 0; j < tempCompanyData.length; j++) {
      //     if (activeIndices[i] === tempCompanyData[j]) {
      //       matchingListOfFiltersForThisCompany.push(activeIndices[i]);
      //       console.log(
      //         "this is the matching list for this company: " +
      //           matchingListOfFiltersForThisCompany
      //       );
      //     }
      //   }
      // }
      // hier selecteren we een lijst van bedrijven
      for (var h = 0; h < companyVariables.length; h++) {
        // hier voegen we de bedrijfsnaam toe
        matchingListOfFiltersForAllCompanies.push(companyVariables[h][0]);
        for (var i = 0; i < activeIndices.length; i++) {
          for (var j = 0; j < companyVariables[h][1].length; j++) {
            console.log("companyVariable: " + companyVariables[h][1][0][j]);
            if (activeIndices[i] === companyVariables[h][1][0][j]) {
              console.log("we are getting here");
              // matchingListOfFiltersForAllCompanies[h][1][j] = activeIndices[i];
            }
          }
        }
      }
      console.log(
        "this is the matching list for this company: " +
          matchingListOfFiltersForAllCompanies
      );

      // this is temp until I sort this out
      return numbers.map((newNumber) => <CompanyTile item={newNumber} />);
    }
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
        {/* {activeIndices.join(", ")} */}

        <div className="filterbox">
          {/* {tempCompanyData} */}
          <div className="row">
            <div className="col-md-3">
              <p className="filter-section-header">Remote</p>
              <ul className="filters-ul">
                <li
                  className="filter-section-category"
                  data-tag-slug="isRemote"
                >
                  <p
                    className={
                      activeIndices.includes("isRemote")
                        ? "filters-li activeFilter"
                        : "filters-li"
                    }
                    onClick={() => handleClick("isRemote")}
                  >
                    Remote
                  </p>
                </li>
                <li
                  className="filter-section-category"
                  data-tag-slug="hybridRemote"
                >
                  <p
                    className={
                      activeIndices.includes("hybridRemote")
                        ? "filters-li activeFilter"
                        : "filters-li"
                    }
                    onClick={() => handleClick("hybridRemote")}
                  >
                    Hybrid
                  </p>
                </li>
                <li
                  className="filter-section-category"
                  data-tag-slug="notRemote"
                >
                  <p
                    className={
                      activeIndices.includes("notRemote")
                        ? "filters-li activeFilter"
                        : "filters-li"
                    }
                    onClick={() => handleClick("notRemote")}
                  >
                    On-site
                  </p>
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
