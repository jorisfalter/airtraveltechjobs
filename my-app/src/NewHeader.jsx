import React from "react";

function NewHeader() {
  return (
    <header>
      <nav class="navbar navbar-expand navbar-dark bg-dark ">
        <div class="navbar-left">
          <a class="navbar-brand" href="#">
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
              <a class="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NewHeader;
