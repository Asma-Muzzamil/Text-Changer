//  always name componets with capital name
import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                {props.aboutText}
              </a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          <div className={`form-check form-switch text-${props.mode==='light' ? 'dark': 'light'} `}>
            <input className="form-check-input" onClick={props.toggleMode}  type="checkbox" role="switch"id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
//  we want some  things to -->props: that makes our component a actual component
//  we can never change props in our function  and also can send objects

//  a check for the prop types
Navbar.propTypes = {
  //   if u think that they maybe left undefined so write is required with them
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

//  if u want to change the default value in function componets
Navbar.defaultProps = {
  title: "set title here",
  aboutText: "about",
};
//  but then u are not going to pass them
//  it wll mean if i ma not passing any value ten use default other wise use the passed values
