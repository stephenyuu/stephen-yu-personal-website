import React from "react";
import ProjectsAccordion from "./projects-accordion";

const Projects = () => {
  return (
    <div
      id="projects"
      className="d-flex flex-column justify-content-center align-items-center my-section my-content"
    >
      <h2 className="my-header">Projects</h2>
      <ProjectsAccordion />
    </div>
  );
};

export default Projects;
