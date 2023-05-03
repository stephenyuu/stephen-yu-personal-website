import React from "react";
import HelloMessage from "./hello-message";
import helloText from "./hello.json";

const About = () => {
  return (
    <div id="about" className="mt-3">
      <HelloMessage text={helloText} />
      <h1 className="fw-bold mt-3 large-heading">My name is Stephen Yu.</h1>
      <h1 className="mt-3 large-heading">I </h1>
    </div>
  );
};

export default About;
