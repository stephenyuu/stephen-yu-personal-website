import React from "react";
import { Fade } from "react-awesome-reveal";
import "./index.css";

const Contact = () => {
  return (
    <Fade triggerOnce fraction={0.25} duration={500} delay={300}>
      <div
        id="contact"
        className="d-flex flex-column justify-content-center align-items-center my-section my-content"
      >
        <h2>Get In Touch</h2>
        <p className="mt-2">
          Shoot me an email if you want to share anything with me, whether it be
          project ideas, questions, or just to say what's up. I'll try my best
          to get back to you!
        </p>
        <a
          className="mt-5 my-email-button"
          href="mailto:stephenyu1229@gmail.com"
        >
          Say What's Up
        </a>
      </div>
    </Fade>
  );
};

export default Contact;
