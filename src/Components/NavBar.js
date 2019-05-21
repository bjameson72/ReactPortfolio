import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
// import { Link } from "gatsby";
import Resume from "../assets/resume/Brock_Resume.pdf";
import "../Styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navWrapper">
        <NavLink to="/">
          <h1 className="logo">Brock Jameson</h1>
        </NavLink>
        <ul className="navButtons">
          <NavLink to="/about">
            <li className="liButton">About</li>
          </NavLink>
          {/* <a href={Resume} target="_blank" rel="noopener noreferrer"> */}
          <li className="liButton">Resume</li>
          {/* </a> */}
          <NavLink to="/projects">
            <li className="liButton">Projects</li>
          </NavLink>
          <NavLink to="/blog">
            <li className="liButton">Blog</li>
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
