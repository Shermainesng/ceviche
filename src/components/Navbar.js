import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 400) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  const btnIsClicked = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar || toggle ? "navbar navbar-expand-lg navbar-dark fixed-top navbar-custom px-3 active" : "navbar navbar-expand-lg navbar-dark fixed-top navbar-custom px-3"}>
      <div class="container-fluid">
        <Link className="navbar-brand logo-custom" to="/">
          <img src={navbar || toggle ? "greywhitelogo.png" : "whitelogo.png"} alt="ceviche" />
        </Link>
        <button onClick={btnIsClicked} class="navbar-toggler toggler-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Resources
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
