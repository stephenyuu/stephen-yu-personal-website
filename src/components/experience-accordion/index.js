import React from "react";
import { Accordion } from "react-bootstrap";
import experienceDescriptions from "./experience-descriptions.json";
import "./index.css";

const ExperienceAccordion = () => {
  return (
    <Accordion className="mt-3 w-75 my-accordion" defaultActiveKey="0">
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
  );
};

export default ExperienceAccordion;
