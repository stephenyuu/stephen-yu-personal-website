import React from "react";
import WelcomeMessage from "./welcome-message";
import helloText from "./hello.json";

const Header = () => {
  return (
    <div className="mt-3">
      <WelcomeMessage text={helloText} />
    </div>
  );
};

export default Header;
