import React from "react";
import socialMediaLinks from "./social-media-links.json";
import "./index.css";

const SocialMedia = () => {
  return (
    <div className="mt-3 d-flex">
      {socialMediaLinks.map((link) => (
        <a href={link.url} className="me-3 my-social-media-icon">
          <i key={link.name} className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
