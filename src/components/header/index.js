import React from "react";
import HelloMessage from "./hello-message";
import helloText from "./hello.json";

const Header = () => {
  return (
    <div className="mt-3">
      <HelloMessage text={helloText} />
      <h1 className="fw-bold name">My name is Stephen Yu.</h1>
    </div>
  );
};

export default Header;
