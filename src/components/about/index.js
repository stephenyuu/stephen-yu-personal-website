import React from "react";
import aboutImage from "../../assets/photos/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="mt-3 d-flex justify-content-center align-items-center my-section"
    >
      <div className="my-image me-5">
        <img
          src={aboutImage}
          alt="Me standing in front of Golden Gate Bridge"
          className="rounded"
        />
      </div>
      <div className="my-content">
        <h2 className="text-center">
          About <span>Me</span>
        </h2>
        <p className="mt-3">
          I am a rising senior at Northeastern University pursuing a B.S. in
          Computer Science and Business Administration with a concentration in
          Entreprenurial Startups. My interest in computer science was sparked
          by my first computer science course during freshman year, when I was
          introudced to the Racket programming language. While the majority of students
        </p>
      </div>
    </div>
  );
};

export default About;
