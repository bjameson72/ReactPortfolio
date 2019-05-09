import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "../Styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navWrapper">
        <NavLink to="/">
          <h1 className="icon">Brock Jameson</h1>
        </NavLink>
        <ul className="navButtons">
          <NavLink to="/about">
            <li className="liButton">About</li>
          </NavLink>
          <NavLink to="/resume">
            <li className="liButton">Resume</li>
          </NavLink>
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
