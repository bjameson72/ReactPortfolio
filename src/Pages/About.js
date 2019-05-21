import React from "react";
import NavBar from "../Components/NavBar";
import "../Styles/About.css";
import TabContainer from "../Components/TabContainer";

class About extends React.Component {
  render() {
    return (
      <div className="aboutWrapper">
        <NavBar />
        <TabContainer />
      </div>
    );
  }
}

export default About;
