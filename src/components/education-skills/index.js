import React from "react";
import Education from "./education";
import Skills from "./skills";
import { Fade } from "react-awesome-reveal"
import "./index.css";

const EducationSkills = () => {
  return (
    <Fade duration={500} delay={300}>
      <div
        id="education"
        className="d-flex justify-content-center my-section my-content"
      >
        <Education />
        <Skills />
      </div>
    </Fade>
  );
};

export default EducationSkills;
