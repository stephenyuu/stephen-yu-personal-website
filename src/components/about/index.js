import React from "react";
import aboutImage from "../../assets/photos/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="d-flex justify-content-center align-items-center my-section"
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
          Entreprenurial Startups. Along with my education, I had the privelege
          of completing a Quality Assurance Engineer Co-op at{" "}
          <a className="hover-link" href="https://pos.toasttab.com/">
            Toast
          </a>
          , a cloud-based restaurant management software company. My interest in
          web development started here when I partook in the makeover of a
          product's user interface. With this newfound passion, I am excited to
          be returning to Toast in the coming months as a Software Engineer
          Co-op!
        </p>
        <p className="mt-3">
          Outside of school and work, I enjoy powerbuilding (a mix of
          powerlifting and bodybuilding), playing and watching basketball,
          cooking and baking, exploring the local food scene, and continuously
          expanding my general knowledge through activities ranging from
          learning a new programming language to watching documentaries about
          company origin stories.
        </p>
        <p className="mt-3">
          Here are some technologies I have been learning or working with
          recently:
        </p>
        <ul className="mt-3">
          <li>JavaScript (ES6+)</li>
          <li>Java</li>
          <li>ReactJS</li>
          <li>Python</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
