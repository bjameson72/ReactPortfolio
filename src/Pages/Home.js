import React from "react";
import About from "./About";
import Blog from "./Blog";
import Projects from "./Projects";
import { Switch, Route, NavLink } from "react-router-dom";
import Github from "../assets/icons/github.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Mail from "../assets/icons/mail.svg";
import "../Styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="homePage">
        <div className="overlay">
          <header className="homeHeader">
            <h1 className="title">Brock Jameson</h1>
            <div className="buttonContainer">
              <NavLink to="/projects">
                <button className="linkedButton">View my projects</button>
              </NavLink>
            </div>
          </header>
          <Switch>
            <Route path="/" exact />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
          </Switch>
          <div className="iconContainer">
            <a
              href="https://github.com/bjameson72"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={Github} alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/brockjameson/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={Linkedin} alt="LinkedIn" />
            </a>
            <a href="mailto:bjameson@talentpath.com">
              <img className="icon" src={Mail} alt="E-Mail" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
