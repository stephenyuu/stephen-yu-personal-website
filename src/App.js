import React from "react";
import HeaderNav from "./components/header-nav";
import Header from "./components/header";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import "./App.css";

function App() {
  return (
    <div className="container">
      <HeaderNav />
      <Header />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
