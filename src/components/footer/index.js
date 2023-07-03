import React from "react";
import { Fade } from "react-awesome-reveal"
import "./index.css";

const Footer = () => (
  <Fade triggerOnce duration={500} delay={300}>
    <footer className="d-flex flex-column justify-content-center align-items-center my-header-footer my-footer-content">
      <a href="/#page-top">
        <i className="bi bi-arrow-up-square"></i>
      </a>
      <div className="p-3">
        <a
          href="https://github.com/stephenyuu/stephen-yu-personal-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by Stephen Yu 2023
        </a>
      </div>
    </footer>
  </Fade>
);

export default Footer;
