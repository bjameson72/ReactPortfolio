import React from "react";
// import { Switch, Route, NavLink } from "react-router-dom";
import { Link } from "gatsby";
import Resume from "../assets/resume/Brock_Resume.pdf";
import "../Styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navWrapper">
        <Link to="/">
          <h1 className="logo">Brock Jameson</h1>
        </Link>
        <ul className="navButtons">
          <Link to="/About">
            <li className="liButton">About</li>
          </Link>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <li className="liButton">Resume</li>
          </a>
          <Link to="/Projects">
            <li className="liButton">Projects</li>
          </Link>
          <Link to="/Blog">
            <li className="liButton">Blog</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
