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
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-400 h-screen">
      <Header />
      <SideNav />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
