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
              <p className="intro-design-profession">FRONTEND DEVELOPER</p>
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
                <p className="intro-details-para-1">I'm a frontend developer passionate about crafting sleek websites and user-friendly web apps. With expertise in HTML, CSS, JavaScript, React.js, I prioritize seamless user experiences and collaborative client relationships. My portfolio showcases diverse projects reflecting modern design trends and optimized performance. </p>
                <p className="intro-details-para-2">Let's collaborate to bring your digital projects to life! Explore my work and let's create something extraordinary together!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
