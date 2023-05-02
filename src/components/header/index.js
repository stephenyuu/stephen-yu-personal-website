import React from "react";
import { config } from "../../config";

const Header = () => {
  return (
    <nav className="mt-3 navbar navbar-expand-lg d-flex justify-content-between">
      <div>Insert Logo Here</div>
      <ul className="d-flex align-items-center">
        {config.navLinks.map((link) => (
          <li>
            <a className="ms-3" href={link.url}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
