import React from "react";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import SocialMedia from "../social-media";
import homeImage from "../../assets/photos/home.jpg";
import "./index.css";

const Header = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "an aspiring full-stack engineer",
        "a fourth-year student",
        "striving to become a bodybuilder",
        "a basketball player previously with NBA dreams",
        "enthusiastic about anything food-related",
        "a family man",
        "a Marvel fanatic",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });
  return (
    <div
      id="home"
      className="d-flex justify-content-center align-items-center my-section"
    >
      <div className="me-5 my-content my-header-text">
        <h3>Hello, my name is</h3>
        <h1>Stephen Yu</h1>
        <h3>
          And I'm <span className="my-typed" ref={el}></span>
        </h3>
        <SocialMedia />
        <button className="mt-3 p-2 btn btn-outline-light my-resume-button">
          Resume
        </button>
      </div>
      <div className="my-image">
        <img
          src={homeImage}
          alt="Me standing in front of Golden Gate Bridge"
          className="rounded"
        />
      </div>
    </div>
  );
};

export default Header;
