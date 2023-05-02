import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.css";

const WelcomeMessage = ({ text }) => {
  const [helloTextIndex, setHelloTextIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  const changeHelloText = () => {
    if (helloTextIndex === text.length - 1) {
      setHelloTextIndex(0);
    } else {
      setHelloTextIndex(helloTextIndex + 1);
    }
  }

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({ fade: "fade-out" });
      } else {
        setFadeProp({ fade: "fade-in" });
        changeHelloText();
      }
    }, 2000);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
      <h1 className={`hello ${fadeProp.fade}`}>{text[helloTextIndex]}</h1>
  );
};

WelcomeMessage.defaultProps = {
  text: "Hello",
};

WelcomeMessage.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string),
};

export default WelcomeMessage;
