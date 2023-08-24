import "./App.css";
import NewHeader from "./NewHeader";
import Footer from "./Footer";
import CompanyTile from "./CompanyTile";
import React, { useState, useEffect } from "react";
import companyList from "./companyList.json";
import departingPlane from "./images/departingplane.jpeg";

// import companyList from "./companyList.json";

var b = 0;
var amountOfCompanies = 10;

function App2() {
  /////////////////// to make it random

  for (var a = [], i = 0; i < amountOfCompanies; ++i) a[i] = i;

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
  // const newArray = Array.from({ length: amountOfCompanies }, () =>
  //   Math.floor(Math.random() * amountOfCompanies)
  // );

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
      [
        companyList[i].remote
          .concat(companyList[i].hqContinent)
          .concat(companyList[i].industry),
      ],
    ];
  }
  console.log(companyVariables);

  // tempCompanyData is only the remote data from KLM
  var tempCompanyData = companyList[0].remote;
  // console.log("hier log ik activeIndices: " + activeIndices);

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
        matchingListOfFiltersForAllCompanies.push([
          companyVariables[h][0],
          ["placeholder"],
        ]);
        for (var i = 0; i < activeIndices.length; i++) {
          for (var j = 0; j < companyVariables[h][1][0].length; j++) {
            // console.log("comp var: " + companyVariables[h][1]);
            // console.log("companyVariable: " + companyVariables[h][1][0][j]);
            if (activeIndices[i] === companyVariables[h][1][0][j]) {
              // console.log("we are getting here");
              // console.log("with activeIndices: " + activeIndices[i]);
              // console.log(
              //   "And companyVariables: " + companyVariables[h][1][0][j]
              // );
              matchingListOfFiltersForAllCompanies[h][1].push(activeIndices[i]);
            }
          }
        }
      }
      // console.log(
      //   "this is the matching list for this company: " +
      //     matchingListOfFiltersForAllCompanies[0][1][2]
      // );

      // so now, the first bracket is the company, eg [0] is the klm array
      // the second bracket is the company data array, with on position 0 the company name, and position 1 the data, so [0][0] is klm, [0][1] gives back an array
      // the third bracket is the position in the array. Position 0 is "placeholder". Then it's depending on the filter chosen, eg [0][1][2] is the second filter clicked, eg isRemote

      // now I need to
      // 1) remove all elements where the second array length is 1 (because of "placeholder"), so matchingListOfFiltersForAllCompanies[0][1].length > 1
      // I could give the index number, maybe it's useful to add the company name as well as a backup

      var listWithoutNonMatchingCompanies = [];
      var listWithoutNonMatchingCompaniesOnlyIndex = [];
      for (var i = 0; i < matchingListOfFiltersForAllCompanies.length; i++) {
        if (matchingListOfFiltersForAllCompanies[i][1].length > 1) {
          listWithoutNonMatchingCompanies.push([
            i,
            matchingListOfFiltersForAllCompanies[i][0],
            matchingListOfFiltersForAllCompanies[i][1].length - 1,
          ]);
          listWithoutNonMatchingCompaniesOnlyIndex.push(i);
        }
      }
      // console.log("filteredList: " + listWithoutNonMatchingCompanies[1]);
      console.log(
        "listWithoutNonMatchingCompanies: " + listWithoutNonMatchingCompanies
      );
      console.log(
        "listWithoutNonMatchingCompaniesOnlyIndex: " +
          listWithoutNonMatchingCompaniesOnlyIndex
      );

      const sortedBrands = listWithoutNonMatchingCompanies.sort(
        (a, b) => b[2] - a[2]
      );

      console.log("sortedBrands: " + sortedBrands);

      let sortedBrandsOnlyIndex = [];

      // this should be "length - 1"
      // but then the last item is missing
      // and it works when using "length"
      for (let i = 0; i < sortedBrands.length; i++) {
        sortedBrandsOnlyIndex.push(sortedBrands[i][0]);
      }

      console.log("sortedBrandsOnlyIndex: " + sortedBrandsOnlyIndex);

      return sortedBrandsOnlyIndex.map((newNumber) => (
        <CompanyTile item={newNumber} />
      ));

      // 3) Then I need to pass on the filters as well to display them, + a bonus when they match all filters
    }
  };

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
            // backgroundSize: "100%",
          }}
        >
          <div className="container">
            <h1>Air Travel Tech Jobs</h1>
            <p className="lead text-muted">
              Your #1 Source for Software Engineering Jobs In Aviation
            </p>
          </div>
          {/* </section> */}

          <div className="filterbox">
            {/* {tempCompanyData} */}
            <div className="row">
              {/* <div className="col-md-3">
              <p className="filter-section-header">Remote</p>
              <ul className="filters-ul">
                <li
                  className="filter-section-category"
                  data-tag-slug="isRemote"
                >
                  <span
                    className={
                      activeIndices.includes("isRemote")
                        ? "filters-li activeFilter"
                        : "filters-li"
                    }
                    onClick={() => handleClick("isRemote")}
                  >
                    Remote
                  </span>
                </li>
                <li
                  className="filter-section-category"
                  data-tag-slug="hybridRemote"
                >
                  <span
                    className={
                      activeIndices.includes("hybridRemote")
                        ? "filters-li activeFilter"
                        : "filters-li"
                    }
                    onClick={() => handleClick("hybridRemote")}
                  >
                    Hybrid
                  </span>
                </li>
                <li
                  className="filter-section-category"
                  data-tag-slug="notRemote"
                >
                  <span
                    className={
                      activeIndices.includes("notRemote")
                        ? "filters-li activeFilter"
                        : "filters-li"
                    }
                    onClick={() => handleClick("notRemote")}
                  >
                    On-site
                  </span>
                </li>
              </ul>
            </div> */}

              <div className="col-md-6">
                <p className="filter-section-header">Time Zone</p>
                <ul className="filters-ul">
                  <li
                    className="filter-section-category"
                    data-tag-slug="Europe"
                  >
                    <span
                      className={
                        activeIndices.includes("Europe")
                          ? "activeFilter filters-li"
                          : "filters-li"
                      }
                      onClick={() => handleClick("Europe")}
                    >
                      Europe
                    </span>
                  </li>
                  <li
                    className="filter-section-category"
                    data-tag-slug="North America"
                  >
                    <span
                      className={
                        activeIndices.includes("North America")
                          ? "filters-li activeFilter"
                          : "filters-li"
                      }
                      onClick={() => handleClick("North America")}
                    >
                      North America
                    </span>
                  </li>
                  {/* <li
                  className="filter-section-category"
                  data-tag-slug="South America"
                >
                  <span
                    className={
                      activeIndices.includes("South America")
                        ? "filters-li activeFilter"
                        : "filters-li"
                    }
                    onClick={() => handleClick("South America")}
                  >
                    South America
                  </span>
                </li>{" "} */}
                  <li
                    className="filter-section-category"
                    data-tag-slug="Asia & Australia"
                  >
                    <span
                      className={
                        activeIndices.includes("Asia & Australia")
                          ? "filters-li activeFilter"
                          : "filters-li"
                      }
                      onClick={() => handleClick("Asia & Australia")}
                    >
                      Asia & Australia
                    </span>
                  </li>{" "}
                  {/* <li
                  className="filter-section-category"
                  data-tag-slug="Middle-East"
                >
                  <span
                    className={
                      activeIndices.includes("Middle-East")
                        ? "filters-li activeFilter"
                        : "filters-li"
                    }
                    onClick={() => handleClick("Middle-East")}
                  >
                    Middle-East
                  </span>
                </li> */}
                </ul>
              </div>
              <div className="col-md-6">
                <p className="filter-section-header">Industry</p>
                <ul className="filters-ul">
                  <li
                    className="filter-section-category"
                    data-tag-slug="Manufacturing"
                  >
                    <span
                      className={
                        activeIndices.includes("Manufacturing")
                          ? "filters-li activeFilter"
                          : "filters-li"
                      }
                      onClick={() => handleClick("Manufacturing")}
                    >
                      Manufacturing
                    </span>
                  </li>
                  <li
                    className="filter-section-category"
                    data-tag-slug="Airline"
                  >
                    <span
                      className={
                        activeIndices.includes("Airline")
                          ? "filters-li activeFilter"
                          : "filters-li"
                      }
                      onClick={() => handleClick("Airline")}
                    >
                      Airline
                    </span>
                  </li>
                  <li
                    className="filter-section-category"
                    data-tag-slug="Tracker"
                  >
                    <span
                      className={
                        activeIndices.includes("Tracker")
                          ? "filters-li activeFilter"
                          : "filters-li"
                      }
                      onClick={() => handleClick("Tracker")}
                    >
                      Tracker
                    </span>
                  </li>
                  <li
                    className="filter-section-category"
                    data-tag-slug="Aircraft Supplier"
                  >
                    <span
                      className={
                        activeIndices.includes("Aircraft Supplier")
                          ? "filters-li activeFilter"
                          : "filters-li"
                      }
                      onClick={() => handleClick("Aircraft Supplier")}
                    >
                      Aircraft Supplier
                    </span>
                  </li>
                </ul>
              </div>
              {/* <div className="col-md-3">
              <p className="filter-section-header">Cool</p>
              <ul className="filters-ul">
                <span className="filter-section-category">Cool</span>
                <span className="filter-section-category">Less Cool</span>
              </ul>
            </div> */}
            </div>
          </div>
        </section>

        {/* <!-- Companies --> */}
        <div className="album py-5 bg-light ">
          <div className="container homepage-wrapper">
            <div className="row">{renderListOfNumbers(companyArray)}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App2;
