import React from "react";
import { Accordion } from "react-bootstrap";
import experienceDescriptions from "./experience-descriptions.json";

const Experience = () => {
  return (
    <div
      id="experience"
      className="mt-3 d-flex flex-column align-items-center my-section my-content"
    >
      <h2>Experience</h2>
      <Accordion className="mt-3" defaultActiveKey="0" flush>
        {experienceDescriptions.map((exp, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header><h4><span>{exp.company}</span></h4></Accordion.Header>
            <Accordion.Body>
              <h5>{exp.position} <span>@ {exp.company}</span></h5>
              <p>{exp.begin} – {exp.end}</p>
              <ul>
                {exp.description.map((resp) => (
                  <li>{resp}</li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Experience;
