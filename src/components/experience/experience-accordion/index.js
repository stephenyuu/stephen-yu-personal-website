import React from "react";
import { useState } from "react";
import experienceDescriptions from "./experience-descriptions.json";
import "./index.css";

const ExperienceTabList = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="mt-3 d-flex my-jobs-list">
      <div role="tablist" aria-label="job-tabs" className="d-flex flex-column my-jobs-tabs-list">
        {experienceDescriptions.map((job, index) => {
          const isActiveTab = index === activeTab;
          return (
            <button
              id={`job-tab${index}`}
              role="tab"
              tabIndex={isActiveTab ? "0" : "-1"}
              aria-selected={isActiveTab ? "true" : "false"}
              aria-controls={`job-panel${index}`}
              onClick={() => setActiveTab(index)}
              className="my-job-tab"
            >
              <span>{job.company}</span>
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
            className="my-job-panel"
          >
            {job.position}
          </div>);
        })}
      </div>
    </div>
    /*
    <Accordion className="mt-3 w-75 my-experience-accordion" defaultActiveKey="0">
        {experienceDescriptions.map((exp, index) => (
          <Accordion.Item eventKey={`${index}`}>
            <Accordion.Header><h4><span>{exp.company}</span></h4></Accordion.Header>
            <Accordion.Body>
              <h5>{exp.position} <span>@ {exp.company}</span></h5>
              <p className="mt-2">{exp.begin} – {exp.end}</p>
              <ul className="mt-2">
                {exp.description.map((resp) => (
                  <li>{resp}</li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      */
  );
};

export default ExperienceTabList;
