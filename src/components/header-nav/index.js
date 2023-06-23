import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import navLinks from "./nav-links.json";
import "./index.css";

const HeaderNav = () => {
  return (
    <Navbar className="mt-3 justify-content-between" expand="md">
      <Navbar.Brand className="my-logo">
        
      </Navbar.Brand>
      <Navbar.Toggle className="my-navbar-button" />
      <Navbar.Collapse className="my-navbar-collapse">
        <Nav>
          {navLinks.map((link) => (
            <Nav.Link key={link.name} href={link.url}>{link.name}</Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNav;
