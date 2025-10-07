import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge rounded-pill text-bg-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
