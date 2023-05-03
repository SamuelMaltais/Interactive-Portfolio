import React, { forwardRef } from "react";
import Restaurant from "../images/restaurant.jpg";
import "./AboutMe.css";

const AboutMe = forwardRef((props, ref) => {
  return (
    <div className="about-me-container" ref={ref}>
      <div className="about-me-description">
        <div className="about-me-description-block">
          <h2>About me</h2>
          <p>
          I am a computer science student with a passion for problem-solving and team collaboration, I have honed my skills in web application, database management, and data visualization through many projects and hackathons.

With experience in ReactJS, GraphQL, VueJs, SQL, ExpressJS, AWS, C# and .NET, I am confident in delivering high-quality code to your projects. Known for being a quick learner with a patient and results-driven approach, I am always eager to step out of my comfort zone and bring creative solutions to the table.

          </p>
        </div>
        <div className="about-me-description-block">
          <p>
          Thanks to my physics intership at McGill university, my pure and applied sciences degree and my passion for sciences, I can support the work of engineers in all disciplines. 


In my free time, I challenge myself by taking on more responsibilities and honing my skills as a high-end cook for some of Quebec's best chefs. My passion for code and collaboration is also reflected in my active contributions on GitHub.
          <br></br><br></br>
          Additional education:
          <br></br>
          Data visualisation certificate - Kaggle
          <br></br>
          Responsive web developpement - Free Code Camp
          <br></br>
          Intermediate Machine Learning course - Kaggle
          </p>
        </div>
      </div>
      <div className="about-me-stories">
      <div className="about-me-rectangle">
      <div className="about-me-story">
        <h2>Restauration and my passion for cooking</h2>
        <p>
          Working hard to provide for my studies, I worked for more than 2 years
          in restauration. Having to balance work and studies, I became very
          efficient with my time. I pride myself in my ability for execution,
          efficiency and consistency.{" "}
        </p>
        <img src={Restaurant} height={450} width={800}></img>
      </div>
      </div>
      <div className="about-me-rectangle">
      <div className="about-me-story">
        <h2>Costumer service and my communication skills</h2>
        <p>
          Working at a grocery store and a public pool, I learned to quickly
          connect with strangers. I was at Metro grocery store the one
          responsible to handle complaints, sell charity products and special
          services on occation. I consider myself to be an excellent salesman
          and I hope you think the same, since this entire website is dedicated
          to selling myself.
        </p>
      </div>
      </div>
      </div>
    </div>
  );
});

export default AboutMe;
