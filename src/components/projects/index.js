import React from "react";
import projectDescriptions from "./project-descriptions.json";

const Projects = () => {
  const getImagePath = (imageName) => {
    return require(`../../assets/photos/${imageName}`).default;
  }
  return (
    <div
      id="projects"
      className="d-flex justify-content-center align-items-center my-section my-content"
    >
      <div className="my-accordion">
        {projectDescriptions.map((proj, index) => (
          <div className="my-accordion-panel">
            <h4 id={`panel${index}-heading`}>
              <button
                className="my-accordion-trigger"
                aria-controls={`panel${index}-content`}
                aria-expanded="true"
              >
                <span id={`panel${index}-title`}>{proj.name}</span>
              </button>
            </h4>
            <div
              className="my-accordion-content"
              id={`panel${index}-content`}
              aria-labelledby="panel1-heading"
              aria-hidden="false"
              role="region"
            >
              <p>
                {proj.description}
              </p>
              <img
                className="my-accordion-image"
                src={getImagePath(proj.image)}
                alt="Chomp Logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
