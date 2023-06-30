import React from "react";
import aboutImage from "../../assets/photos/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="d-flex justify-content-center align-items-center my-section my-content"
    >
      <div className="my-image me-5">
        <img
          src={aboutImage}
          alt="My family and I standing in front of The Vessel"
          className="rounded"
        />
      </div>
      <div>
        <h2 className="text-center my-header">
          About <span>Me</span>
        </h2>
        <p className="mt-3">
          I'm a rising senior at Northeastern University pursuing a B.S. in
          Computer Science and Business Administration with a concentration in
          Entreprenurial Startups. Along with my education, I had the privelege
          of completing a Quality Assurance Engineer Co-op at{" "}
          <a className="hover-link" href="https://pos.toasttab.com/">
            Toast
          </a>
          , a cloud-based restaurant management software company. My interest in
          web development started here when I partook in the makeover of a
          product's user interface. With this newfound passion, I'm excited to
          be returning to Toast in the coming months as a Software Engineer
          Co-op!
        </p>
        <p className="mt-3">
          Outside of school and work, I enjoy spending quality time with family
          and friends, powerbuilding (a mix of powerlifting and bodybuilding),
          playing and watching basketball, cooking and baking, exploring the
          local food scene, and continuously expanding my general knowledge
          through activities ranging from learning a new programming language to
          watching documentaries about company origin stories.
        </p>
        <p className="mt-3">
          Here are some technologies I've been working with
          recently:
        </p>
        <ul className="mt-3">
          <li>JavaScript (ES6+)</li>
          <li>Java</li>
          <li>ReactJS</li>
          <li>Python</li>
          <li>Node.js</li>
          <li>C</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
