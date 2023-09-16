import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
const Navbar = () => {
  return (
    <header className="container py-4 ">
      <nav class="navbar navbar-light bg-white px-3">
        <div className="logo">
          <Link class="navbar-brand" to="/links">
            {/* <img
              src="/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top "
            /> */}
            <FontAwesomeIcon icon={faLink} /> devlinks
          </Link>
        </div>

        <div className="middle-link ">
          <NavLink to="/links" className="mx-3 nav-link text-decoration-none">
            <FontAwesomeIcon icon={faLink} /> Links
          </NavLink>
          <NavLink to="/profile" className=" nav-link text-decoration-none ">
            <FontAwesomeIcon icon={faCircleUser} /> Profile Details
          </NavLink>
        </div>

        <button className="out">
          <NavLink to="/preview" className="nav-link text-decoration-none ">
            Preview
          </NavLink>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
