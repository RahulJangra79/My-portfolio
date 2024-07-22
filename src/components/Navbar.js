import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-heading">
          <p className="navbar-myname">
            Rahul Jangra <span className="navbar-profession">/ WEB DEVELOPER</span>
          </p>
        </div>

        <div className="navbar-menu">
          <ul>
            <li>
              <Link className="navbar-item" to="/">ABOUT ME</Link>
            </li>
            <li>
              <Link className="navbar-item" to="resume">RESUME</Link>
            </li>
            <li>
              <Link className="navbar-item" to="projects">PROJECTS</Link>
            </li>
            <li>
              <Link className="navbar-item" to="contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
