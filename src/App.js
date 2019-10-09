import React from "react";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Blog from "./Pages/Blog";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
