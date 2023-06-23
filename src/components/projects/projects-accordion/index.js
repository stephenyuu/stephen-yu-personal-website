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
                <span id={`panel${index}-title`}>{proj.name}</span>
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
              <p>{proj.description}</p>
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
  );
};

export default ProjectsAccordion;
