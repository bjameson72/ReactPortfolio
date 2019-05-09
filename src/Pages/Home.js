import React from "react";
import About from "./About";
import Resume from "./Resume";
import Blog from "./Blog";
import Projects from "./Projects";
import { Switch, Route, NavLink } from "react-router-dom";
import "../Styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="homePage">
        <div className="overlay">
          <header className="homeHeader">
            <h1 className="title">Brock Jameson</h1>
            <div className="buttonContainer">
              <NavLink to="/about">
                <button className="linkedButton">About</button>
              </NavLink>
              <NavLink to="/resume">
                <button className="linkedButton">Resume</button>
              </NavLink>
              <NavLink to="/projects">
                <button className="linkedButton">Projects</button>
              </NavLink>
              <NavLink to="/blog">
                <button className="linkedButton">Blog</button>
              </NavLink>
            </div>
          </header>
          <Switch>
            <Route path="/" exact />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
