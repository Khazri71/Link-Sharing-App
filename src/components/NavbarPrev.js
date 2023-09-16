import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
const NavbarPrev = () => {
  return (
    <header className="container py-4 ">
      <nav class="navbar navbar-light bg-white px-3">
        <div className="two-links ">
          <button className="out">
            <NavLink to="/" className="nav-link text-decoration-none ">
              Back to Editor
            </NavLink>
          </button>

          <button className="ino">
            <NavLink to="/" className="nav-link text-decoration-none ">
              Share Link
            </NavLink>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavbarPrev;
