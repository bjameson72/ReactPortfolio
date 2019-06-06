import React from "react";
import NavBar from "../Components/NavBar";
import "../Styles/Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="projectWrapper">
        <NavBar />
        <ul className="projectsContainer">
          <a
            className="atag"
            href="http://www.aura.community"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="project">Project Aura</li>
          </a>
          <a
            className="atag"
            href="http://www.brockjameson.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="project">Cryptotracker</li>
          </a>
        </ul>
      </div>
    );
  }
}

export default Projects;
