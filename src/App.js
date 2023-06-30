import React from "react";
import HeaderNav from "./components/header-nav";
import Header from "./components/header";
import About from "./components/about";
import EducationSkills from "./components/education-skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <HeaderNav />
      <Header />
      <About />
      <EducationSkills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 
