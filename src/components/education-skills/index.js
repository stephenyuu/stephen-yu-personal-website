import React from "react";
import Education from "./education";
import Skills from "./skills";

const EducationSkills = () => {
  return (
    <div
      id="education-skills"
      className="d-flex justify-content-around align-items-start my-section my-content"
    >
      <Education />
      <Skills />
    </div>
  );
};

export default EducationSkills;
