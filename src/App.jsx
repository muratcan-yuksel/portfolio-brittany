import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//components
import Navbar from "./components/Navbar.jsx";
import Landing from "./components/Landing.jsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
};

export default App;
