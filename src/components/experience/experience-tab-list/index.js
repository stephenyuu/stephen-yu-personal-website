import React from "react";
import { useState } from "react";
import experienceDescriptions from "./experience-descriptions.json";
import "./index.css";

const ExperienceTabList = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="mt-5 my-jobs-list-wrapper">
      <div className="my-jobs-list">
        <div
          role="tablist"
          aria-label="job-tabs"
          className="my-jobs-tabs-list"
        >
          {experienceDescriptions.map((job, index) => {
            const isActiveTab = index === activeTab;
            return (
              <button
                role="tab"
                aria-selected={isActiveTab ? "true" : "false"}
                aria-controls={`job-panel${index}`}
                id={`job-tab${index}`}
                tabIndex={isActiveTab ? "0" : "-1"}
                onClick={() => setActiveTab(index)}
                className="my-job-tab"
              >
                <h4>
                  {job.company}
                </h4>
              </button>
            );
          })}
        </div>
        <div className="my-jobs-panels">
          {experienceDescriptions.map((job, index) => {
            const isActiveTab = index === activeTab;
            return (
              <div
                id={`job-panel${index}`}
                role="tabpanel"
                tabIndex={isActiveTab ? "0" : "-1"}
                aria-labelledby={`job-tab${index}`}
                aria-hidden={isActiveTab ? "false" : "true"}
                hidden={isActiveTab ? false : true}
                className="my-job-panel"
              >
                <h4>
                  {job.position} <span>@ {job.company}</span>
                </h4>
                <p className="mt-2">
                  {job.begin} – {job.end}
                </p>
                <div className="mt-2">
                  {job.skills.map((skill) => (
                    <span className="badge me-2">{skill}</span>
                  ))}
                </div>
                <ul className="mt-2">
                  {job.description.map((resp) => (
                    <li>{resp}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTabList;
