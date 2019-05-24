import React from "react";
import Golf from "../assets/pictures/golf.png";

const Personal = () => (
  <div className="grid">
    <article className="content">
      <p className="paragraphContent">
        Hi, my name is Brock! I'm a Chicago native that relocated to Los Angeles
        after graduating from DePaul University. Usually I can be found with my
        headphones in, listening to music and working on my laptop.
      </p>
      <p className="paragraphContent">
        Throughout my childhood and through high school I played golf extremely
        competitively, traveling across the country to participate in
        tournaments. I stopped playing competitively when I got to college to
        focus on school instead of trying to balance both, but I still love
        playing for fun in my free time.
      </p>
      <p className="paragraphContent">
        Since moving to Los Angeles, I've developed a love for hiking and eating
        new foods like ramen and sushi - even though Chicago deep-dish pizza
        will always have a special place in my heart.
      </p>
    </article>
    <section className="pictures">
      <div className="pictureContainer">
        <img className="pic1" src={Golf} alt="Golfing" />
      </div>
    </section>
  </div>
);

export default Personal;
