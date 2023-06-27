import React, { useState } from "react";
import projectDescriptions from "../project-descriptions.json";
import projectIcons from "../../../assets/svgs/icons.svg";
import "./index.css";

const ProjectsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const getImagePath = (imageName) => {
    return require(`../../../assets/photos/project-images/${imageName}`);
  };

  return (
    <div className="mt-3 my-project-accordion-wrapper">
      <div className="my-project-accordion">
        {projectDescriptions.map((proj, index) => {
          const isActivePanel = index === activeIndex;
          const projectSvg = proj.image.substring(0, proj.image.indexOf("."));
          return (
            <div
              className="my-project-panel"
              onClick={() => setActiveIndex(index)}
            >
              <h4 id={`panel${index}-heading`}>
                <button
                  className="my-project-accordion-trigger"
                  aria-controls={`panel${index}-content`}
                  aria-expanded={isActivePanel ? "true" : "false"}
                >
                  <span
                    className="my-project-accordion-title"
                    id={`panel${index}-title`}
                  >
                    {proj.name}
                  </span>
                  <svg aria-hidden="true" className="my-project-accordion-icon">
                    <use href={`${projectIcons}#${projectSvg}`}></use>
                  </svg>
                </button>
              </h4>
              <div
                className="my-project-content"
                id={`panel${index}-content`}
                aria-labelledby={`panel${index}-heading`}
                aria-hidden={isActivePanel ? "false" : "true"}
                role="region"
              >
                <p className="mt-2">{proj.description}</p>
                <div className="mt-2 my-project-built-with">
                  {proj.builtWith.map((techUsed) => (
                    <span className="badge me-2">{techUsed}</span>
                  ))}
                </div>
                <div className="mt-2 my-project-links">
                  <a className="my-project-github-icon" href={proj.github}>
                    <i class="bi bi-github"></i>{" "}
                  </a>
                </div>
                <img
                  className="my-project-accordion-image"
                  src={getImagePath(proj.image)}
                  alt={proj.name}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsAccordion;
