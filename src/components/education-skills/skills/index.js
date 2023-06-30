import React from "react";
import skillsList from "./skills-list.json";
import "./index.css";

const Skills = () => {
  return (
    <div className="my-gradient-container">
      <div className="d-flex flex-column my-education-skills-content">
        <h2 className="align-self-center">Skills</h2>
        <h4 className="mt-2">
          Here are some other languages I've worked with:{" "}
        </h4>
        <div className="mt-2 my-skills">
          {skillsList[0].languages.map((lang) => (
            <span key={lang} className="badge me-2 mt-2">
              {lang}
            </span>
          ))}
        </div>
        <h4 className="mt-2">
          Here are some other technologies I've worked with:{" "}
        </h4>
        <div className="mt-2 mb-2 my-skills">
          {skillsList[1].technologies.map((tech) => (
            <span key={tech} className="badge me-2 mt-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
