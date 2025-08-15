import React from "react";
import './AboutMe.css';
import Me from '../assets/images/me.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-flex">
        <img
          src={Me}
          alt="About Me"
          className="about-img"
        />
        <div>
          <h2>About Me</h2>
          <p>I'm a multimedia artist, front-end developer, and UI/UX designer with a passion for creating engaging digital experiences. With over 5 years of experience in the creative industry, I specialize in blending technical expertise with artistic vision. </p>
        </div>
      </div>
    </section>
  );
};

export default About;
