import React from "react";
import TalentPath from "../assets/pictures/0.png";
import Farragut from "../assets/pictures/farragut.jpg";

const Work = () => (
  <div className="grid">
    <article className="content">
      <p className="paragraphContent">
        My first internship involved going to an inner-city charter school in
        Chicago, IL to teach the students the importance of Computer Science. We
        decided to use Scratch for the class, which is a software built by MIT
        to teach kids the basic fundamentals of programming through a
        drag-and-drop system for coding. This internship was a great experience
        overall and was very rewarding to be able to teach kids this level of
        technology that they had never seen before.
      </p>
      <p className="paragraphContent">
        After relocating to Los Angeles, I was able to find my current job at
        Talent Path where I am able to continue learning and continue to get
        better at being a developer everyday. Since coming here, I have gotten
        very familiar with building full-scale web applications using React
        while also learning to work in larger development teams in an agile
        environment.
      </p>
    </article>
    <section className="workPictures">
      <div className="pictureContainer">
        <img className="farragut" src={Farragut} alt="Talent Path" />
        <img className="pics" src={TalentPath} alt="Talent Path" />
      </div>
    </section>
  </div>
);

export default Work;
