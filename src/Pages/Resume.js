import React from "react";
import NavBar from "../Components/NavBar";
import "../Styles/Resume.css";
// import { resume } from "../assets/resume/Brock_Resume.pdf";

class Resume extends React.Component {
  render() {
    return (
      <div className="resumeWrapper">
        <NavBar />
        <div className="page">
          <iframe
            className="resume"
            title="resume"
            src="https://docs.google.com/viewer?srcid=1VVX1uoXyydvPXGAeQg7L96T5RU6NyiUz&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Resume;
