import React from "react";
import ExperienceTabList from "./experience-tab-list";

const Experience = () => {
  return (
    <div
      id="experience"
      className="d-flex flex-column justify-content-center align-items-center my-section my-content"
    >
      <h2>Experience</h2>
      <ExperienceTabList />
    </div>
  );
};

export default Experience;
