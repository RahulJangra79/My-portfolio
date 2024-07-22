import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div>
        <div className="solid-color">
          <div className="intro">
            <div className="intro-design">
              <div className="profile-photo"></div>
              <h1 className="intro-design-name">Rahul Jangra</h1>
              <p className="intro-design-profession">WEB DEVELOPER</p>
              <div className="social-media-icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>

            <div className="intro-details">
                <p className="intro-details-heading-1">Hello</p>
                <p className="intro-details-heading-2">Here's who I am & what I do</p>
                <button className="button-resume">RESUME</button>
                <button className="button-projects">PROJECTS</button>
                <p className="intro-details-para-1">I am a web developer deeply passionate about creating polished websites and intuitive web applications. With a strong command of HTML, CSS, JavaScript, and React.js, I specialize in delivering seamless user experiences and fostering collaborative client relationships. My portfolio features a range of projects that embody contemporary design principles and emphasize optimized performance.</p>
                <p className="intro-details-para-2">Let's collaborate to transform your digital ideas into reality! Explore my portfolio and let's embark on creating something exceptional together. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
