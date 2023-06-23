import React from "react";
import ProjectsAccordion from "./projects-accordion";
import "./index.css";

const Projects = () => {
  return (
    <div
      id="projects"
      className="d-flex justify-content-center align-items-center my-section my-content"
    >
      <ProjectsAccordion />
    </div>
  );
};

export default Projects;
