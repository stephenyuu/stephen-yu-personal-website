import React from "react";
import HeaderNav from "./components/header-nav";
import Header from "./components/header";
import About from "./components/about";
import "./App.css";
import Experience from "./components/experience";

function App() {
  return (
    <div className="container">
      <HeaderNav />
      <Header />
      <About />
      <Experience />
    </div>
  );
}

export default App;
