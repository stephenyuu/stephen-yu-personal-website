import React from "react";
import SocialMedia from "../social-media";
import homeImage from "../../assets/photos/home.jpg";
import "./index.css";

const Header = () => {
  return (
    <div
      className="mt-3 d-flex justify-content-center align-items-center section"
    >
      <div className="my-home-content me-5">
        <h3>Hello, my name is</h3>
        <h1>Stephen Yu</h1>
        <h3>
          And I am <span>a Frontend Developer</span>
        </h3>
        <SocialMedia />
        <button className="mt-3 p-2 btn btn-outline-light my-resume-button">Resume</button>
      </div>
      <div className="my-home-image">
        <img src={homeImage} alt="Me standing in front of Golden Gate Bridge" className="rounded"/>
      </div>
    </div>
  );
};

export default Header;
