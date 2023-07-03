import React from "react";
import { Fade } from "react-awesome-reveal";
import ExperienceTabList from "./experience-tab-list";

const Experience = () => {
  return (
    <Fade triggerOnce fraction={0.25} duration={500} delay={300}>
      <div
        id="experience"
        className="d-flex flex-column justify-content-center align-items-center my-section my-content"
      >
        <h2>Experience</h2>
        <ExperienceTabList />
      </div>
    </Fade>
  );
};

export default Experience;
