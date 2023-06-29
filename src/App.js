import React from "react";
import HeaderNav from "./components/header-nav";
import Header from "./components/header";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Education from "./components/education";
import Footer from "./components/footer";
import Contact from "./components/contact";
import "./App.css";

function App() {
  return (
    <div className="container">
      <HeaderNav />
      <Header />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
