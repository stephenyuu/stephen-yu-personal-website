import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import navLinks from "./nav-links.json";
import projectIcons from "../../assets/svgs/icons.svg";
import "./index.css";

const HeaderNav = () => {
  return (
    <Navbar className="fixed-top py-3 justify-content-between" expand="md">
      <div className="container">
        <Navbar.Brand className="my-logo">
          <a href="/">
            <svg aria-hidden="true" className="my-logo-icon">
              <use href={`${projectIcons}#logo`}></use>
            </svg>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle className="my-navbar-button" />
        <Navbar.Collapse className="my-navbar-collapse">
          <Nav>
            {navLinks.map((link) => (
              <Nav.Link key={link.name} href={link.url}>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default HeaderNav;
