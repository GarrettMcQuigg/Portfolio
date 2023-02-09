import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

function App() {
  return (
    <div className=" bg-gradient-to-r from-gray-900 to-gray-800 text-stone-300 min-h-screen font-inter">
      <Header />
      <Intro />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
