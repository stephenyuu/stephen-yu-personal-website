import React from "react";
import Fade from "react-reveal/Fade";
import ProjectsAccordion from "./projects-accordion";

const Projects = () => {
  return (
    <Fade duration={500} delay={300}>
      <div
        id="projects"
        className="d-flex flex-column justify-content-center align-items-center my-section my-content"
      >
        <h2>Projects</h2>
        <ProjectsAccordion />
      </div>
    </Fade>
  );
};

export default Projects;
