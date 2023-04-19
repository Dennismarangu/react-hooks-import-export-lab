import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Home username="Dennis Mutuma," city="Nairobi" />
      <About img="" />
    </div>
  );
}

export default App;
