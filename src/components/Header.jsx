import React from "react";

function Header() {
  return (
    <div class="relative">
      <div class="mx-auto w-screen px-6">
        <div class="flex items-center justify-between border-b-2 border-slate-400 py-6  md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <div>Garrett McQuigg</div>
          </div>
          <nav class="hidden space-x-10 md:flex">
            <div class="relative">
              <a href="#about">About</a>
            </div>
            <div class="relative">
              <a href="#experience">Experience</a>
            </div>
            <div class="relative">
              <a href="#projects">Projects</a>
            </div>
            <div class="relative">
              <a href="#contact">Contact</a>
            </div>
            <button className="rounded border-2 border-slate-400 h-8"><span className="p-6"><b>Resume</b></span></button>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Header;
