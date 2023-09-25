import React from "react";
import { Fade } from "react-awesome-reveal";
import aboutImage from "../../assets/photos/about.jpg";
import "./index.css";

const About = () => {
  return (
    <Fade triggerOnce fraction={0.25} duration={500} delay={300}>
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
          <h2 className="text-center">
            About <span>Me</span>
          </h2>
          <p className="mt-3">
            I'm a senior at Northeastern University pursuing a B.S. in
            Computer Science and Business Administration with a concentration in
            Entreprenurial Startups. Along with my education, I had the
            privilege of completing a Quality Assurance Engineer Co-op at{" "}
            <a
              className="hover-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://pos.toasttab.com/"
            >
              Toast
            </a>
            , a cloud-based restaurant management software company. My interest
            in web development started here when I partook in the makeover of a
            product's user interface. With this newfound passion, I'm excited to
            be back at Toast as a Software Engineer Co-op, building solutions that
            facilitate the restaurant onboarding process with the Onboarding Applications Team! 
          </p>
          <p className="mt-3">
            Outside of school and work, I enjoy spending quality time with
            family and friends, powerbuilding (a mix of powerlifting and
            bodybuilding), playing and watching basketball, cooking and baking,
            exploring the local food scene, and continuously expanding my
            general knowledge through activities ranging from learning a new
            programming language to watching documentaries about company origin
            stories.
          </p>
          <p className="mt-3">
            Here are some technologies I've been working with recently:
          </p>
          <ul className="mt-3">
            <li>TypeScript</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Kotlin</li>
            <li>ReactJS</li>
            <li>C</li>
          </ul>
        </div>
      </div>
    </Fade>
  );
};

export default About;
