import React from "react";
import Education from "./education";
import Skills from "./skills";
import "./index.css";

const EducationSkills = () => {
  return (
    <div
      id="education"
      className="d-flex justify-content-center my-section my-content"
    >
      <Education />
      <Skills />
    </div>
  );
};

export default EducationSkills;
