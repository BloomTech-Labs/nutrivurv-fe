import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const Nav = () => {
  return (
    <div className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div>
        <NavLink to="/" className="navbar-brand">
          <Logo />
        </NavLink>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <nav
        className="collapse navbar-collapse align-items-end flex-column "
        id="navbarColor03"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link d-flex justify-content-center">
              <h5>Home</h5>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-link d-flex justify-content-center  ml-xl-5 ml-lg-5 ml-md-5  ml-sm-0 "
            >
              <h5>About Us</h5>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/signin"
              className="nav-link d-flex justify-content-center ml-xl-5 ml-lg-5  ml-md-5  ml-sm-0 "
            >
              <h5>Sign In</h5>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/signup"
              className="nav-link d-flex justify-content-center ml-xl-5 ml-lg-5 ml-md-5 mr-xl-4 mr-lg-4 mr-md-4 ml-sm-0 mr-sm-0  "
            >
              <h5>Sign Up</h5>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
