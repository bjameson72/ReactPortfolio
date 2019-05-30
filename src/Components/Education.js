import React from "react";
import DePaul from "../assets/pictures/DePaul_logo.png";

const Education = () => (
  <div className="grid">
    <article className="content">
      <p className="paragraphContent">
        I started majoring in accounting, but always have had an interest in
        working with computers. I decided to switch majors after my freshman
        year to focus on Software Engineering, but decided to still keep my
        minor in Finance.
      </p>
      <p className="paragraphContent">
        My major focused a lot on mastering the fundamentals of object-oriented
        programming with some data-analytics and systems programming added as
        well.
      </p>
      <p className="paragraphContent">
        My favorite project that I worked on at DePaul University was an Angular
        project that I was a part of with 3 others where we made a
        cryptotracking application. The web application allowed a user to sign
        in, choose which cryptocurrency markets the user wants to monitor, and
        see live feed of information about those markets. Brock
      </p>
    </article>
    <section className="pictures">
      <div className="pictureContainer">
        <img className="pic1" src={DePaul} alt="DePaul University" />
      </div>
    </section>
  </div>
);

export default Education;
