import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import css
import "./App.css";
//components
import Navbar from "./components/Navbar.jsx";
import Landing from "./components/Landing.jsx";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
    </div>
  );
};

export default App;
