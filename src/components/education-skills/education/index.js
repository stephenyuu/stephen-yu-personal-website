import React from "react";
import educationDescription from "./education-descriptions.json";
import "./index.css";

const Education = () => {
  return (
    <div className="my-gradient-container">
      <div className="d-flex flex-column my-education-skills-content">
        <h2 className="align-self-center">Education</h2>
        <h4 className="mt-2">{educationDescription.school}</h4>
        <p className="mt-2">
          {educationDescription.begin} – {educationDescription.end}
        </p>
        <p className="mt-2">{educationDescription.study}</p>
        <p className="mt-2">GPA: {educationDescription.gpa} / 4.0</p>
        <p className="mt-2">Honors: {educationDescription.honors}</p>
        <p className="mt-2">Relevant Coursework:</p>
        <div className="mt-2">
          {educationDescription.coursework.map((course) => (
            <span key={course} className="badge me-2 mt-2">
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
