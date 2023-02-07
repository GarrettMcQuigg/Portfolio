import React from "react";

function Header() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-full px-6">
        <div className="flex items-center justify-between border-b-2 border-slate-400 py-6  md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div className="pl-4">GarrettMcQuigg@gmail.com</div>
          </div>
          <nav className="hidden space-x-10 md:flex pr-4">
            <div className="relative">
              <a href="#projects">Projects</a>
            </div>
            <div className="relative">
              <a href="#about">About</a>
            </div>
            <div className="relative">
              <a href="#experience">Experience</a>
            </div>
            <div className="relative">
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Header;
