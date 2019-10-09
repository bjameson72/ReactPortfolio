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
            href="http://www.sliceit.pizza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="project">
              <span className="projName">Slice It</span>
            </li>
          </a>
          <a
            className="atag"
            href="http://www.aura.community"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="project">
              <span className="projName">Project Aura</span>
            </li>
          </a>
          <a
            className="atag"
            href="http://www.brockjameson.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="project">
              <span className="projName">Cryptotracker</span>
            </li>
          </a>
          <a
            className="atag"
            href="https://github.com/bjameson72"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="project">
              <span className="projName">Check out my Github!</span>
            </li>
          </a>
        </ul>
      </div>
    );
  }
}

export default Projects;
