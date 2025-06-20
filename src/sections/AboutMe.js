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
            I’m Samuel Maltais, a dedicated software developer with a Bachelor’s
            in Computer Science from the University of Montreal (COOP). My
            technical background spans fullstack development, IoT systems, and
            cloud infrastructure, with hands-on experience in telecom, satellite
            systems, and smart locker technologies through roles at Ericsson,
            MDA, and Locketgo. <br></br>Before entering tech, I worked in
            high-pressure roles as a lead cook, lifeguard, cashier, and line
            cook. These experiences taught me discipline, resilience, and
            effective communication—skills that now shape my approach to
            software development. Balancing these demanding jobs while studying
            full-time helped build a strong work ethic and deep appreciation for
            collaboration and time management.
          </p>
        </div>
        <div className="about-me-description-block">
          <p>
            Outside of work, I thrive on competition - earning top placements in
            hackathons and CS Games, and representing my university in
            competitive programming.
            <br></br>
            <br></br>
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
              Working hard to provide for my studies, I worked for more than 2
              years in restauration. Having to balance work and studies, I
              became very efficient with my time. I pride myself in my ability
              for execution, efficiency and consistency.{" "}
            </p>
            <img src={Restaurant} height={450} width={800}></img>
          </div>
        </div>
        <div className="about-me-rectangle">
          <div className="about-me-story">
            <h2>Customer service and my communication skills</h2>
            <p>
              Working at a grocery store and a public pool, I learned to quickly
              connect with strangers. I worked at the Metro grocery store as the
              one responsible for handling complaints, selling charity products
              and holiday lotteries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
