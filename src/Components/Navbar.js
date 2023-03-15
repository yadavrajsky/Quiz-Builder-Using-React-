import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar(props) {
  return (
    <div className="header">
      <nav
        className="navbar navbar-expand-lg bg-light fixed-top"
        style={{ boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16)" }}
      >
        <div className="container-fluid ">          
          <Link className="navbar-brand ms-lg-3 m-auto me-0" to="/">
            {props.title}
          <span className="text-black h4 m-auto">Quantafile</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 text-center ms-lg-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/PlayQuiz" className="nav-link">
                  Play Quiz
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/MyQuiz" className="nav-link">
                  My Quiz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = { title: PropTypes.object };
Navbar.defaultProps = {
  title: "Quantafile",
};
