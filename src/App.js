import React from "react";
import HeaderNav from "./components/header-nav";
import Header from "./components/header";
import About from "./components/about";
import "./App.css";

function App() {
  return (
    <div className="container">
      <HeaderNav />
      <Header />
      <About />
    </div>
  );
}

export default App;
