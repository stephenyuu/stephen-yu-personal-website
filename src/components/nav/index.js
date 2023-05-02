import React from "react";
import navLinks from "./nav-links.json";

const Nav = () => {
  return (
    <nav className="mt-3 navbar navbar-expand-lg d-flex justify-content-between">
      <div>Insert Logo Here</div>
      <div className="d-flex align-items-center">
        <ul className="d-flex justify-content-between align-items-center">
          {navLinks.map((link) => (
            <li>
              <a className="ms-3" href={link.url}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a className="ms-3 btn btn-outline-info resume-button">Resume</a>
      </div>
    </nav>
  );
};

export default Nav;
