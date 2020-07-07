import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { ReactComponent as Placeholder } from "../../../assets/Placeholder.svg";
import DailyVibe from "./DailyVibe";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="wrapper">
      <nav id="sidebar" className={toggle ? "sidebar-active" : "sidebar"}>
        <div className="d-flex justify-content-center my-3 ">
          <NavLink to="/" className="navbar-brand ">
            <Logo className="logo" />
          </NavLink>
        </div>
        <div>
          <div className="d-flex flex-column align-items-center my-5">
            <Placeholder />
            <h6 className="font-weight-bolder">Daily Intake</h6>
            <div className="d-flex my-3">
              <div>
                <h3 className="mr-5">
                  195
                  <span className="pl-1" style={{ fontSize: "14px" }}>
                    lbs
                  </span>
                </h3>
                <h5 className="pl-2 font-weight-bolder">Weight</h5>
              </div>
              <div>
                <h3>
                  12
                  <span className="pl-1" style={{ fontSize: "14px" }}>
                    days
                  </span>
                </h3>
                <h5 className="pl-2 font-weight-bolder">Streak</h5>
              </div>
            </div>
            <div className="mt-5 mb-3">
              <button
                id="add-journal"
                className="btn-primary rounded p-2 border border-primary"
                style={{ width: "250px" }}
              >
                Add to Journal
              </button>
            </div>
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="side-link mb-3 pl-4">
            <NavLink to="/" id="food" className="nav-link">
              <h4 className="font-weight-bold primary-color">Food</h4>
            </NavLink>
          </li>
          <li className="side-link mb-3 pl-4">
            <NavLink to="/" id="progress" className="nav-link">
              <h4 className="font-weight-bold primary-color">Progress</h4>
            </NavLink>
          </li>
          <li className="side-link mb-5 pl-4">
            <NavLink to="/" id="community" className="nav-link">
              <h4 className="font-weight-bold primary-color">Community</h4>
            </NavLink>
          </li>
        </ul>
        <div className="mt-5 pl-4 pt-5">
          <h4 className="font-weight-bold">Daily Vibe</h4>
          <DailyVibe />
        </div>
      </nav>
      <div>
        <button type="button" className="navbar-light bg-light navbar-toggler">
          <span
            className="navbar-toggler-icon"
            onClick={() => setToggle(!toggle)}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
