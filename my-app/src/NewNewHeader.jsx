import React from "react";

function NewNewHeader() {
  return (
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <p class="navbar-brand">HOTEL REMOTE</p>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li id="home">
            <a href="index.html">HOME</a>
          </li>
          <li id="about">
            <a href="about.html">ABOUT</a>
          </li>
          <li id="about">
            <a href="lists.html">LISTS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NewNewHeader;
