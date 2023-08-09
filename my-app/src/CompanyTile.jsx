import React from "react";
import companyList from "./companyList.json";

// from StackOverflow
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

function CompanyTile(props) {
  // import frontImage from {props.item} + ".jpg"

  return (
    <div className="col-md-4">
      <a href={companyList[props.item].link} target="_blank">
        <div className="card mb-4 shadow-sm">
          {/* <svg
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
            {companyList[props.item].companyName}
          </text>
        </svg> */}
          <div className="imageContainer">
            <img
              src={images[companyList[props.item].img]}
              className="bd-placeholder-img card-img-top"
              // width="100%"
              // height="225"
              height="100%"
            />
            <div className="centered">
              HQ: {companyList[props.item].hq}
              <br></br>
              Industry: {companyList[props.item].industry}
            </div>
            <div className="centered"></div>
          </div>

          <div className="card-body">
            {/* <p className="card-company-name">
            {companyList[props.item].companyName}
          </p> */}
            <p className="why-cool-question">
              Why Is {companyList[props.item].companyName} a Cool Company?
            </p>
            <p className="card-text">{companyList[props.item].whyCool}</p>
            <div className="d-flex justify-content-between align-items-center">
              {/* <div className="btn-group">
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
            </div> */}
              {/* <small className="text-muted">Something here?</small> */}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CompanyTile;
