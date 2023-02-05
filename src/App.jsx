import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="bg-slate-900/[0.95] text-slate-300/[0.9] h-screen">
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
