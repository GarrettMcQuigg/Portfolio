import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-gray-900 text-stone-300 min-h-screen font-inter">
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
