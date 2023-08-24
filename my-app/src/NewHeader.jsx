import React from "react";
import { Link } from "react-router-dom";

function NewHeader() {
  return (
    <header>
      <nav class="navbar navbar-expand navbar-dark bg-dark ">
        <div class="navbar-left">
          <a class="navbar-brand" href="/">
            Air Travel Tech Jobs
          </a>
        </div>

        <div
          class="collapse navbar-collapse navbar-right"
          id="navbarsExample02"
        >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active"></li>
            <li class="nav-item">
              <Link class="nav-link" to="/About">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Fun">
                Fun
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                <i>Submit</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NewHeader;
