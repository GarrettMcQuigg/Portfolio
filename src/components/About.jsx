import React from "react";
import me from "../images/me.jpg"

function About() {
  return (
    <div id="about" className="flex flex-row justify-center my-20 pl-48">
      <div className="w-4/12 pr-8">
        <h1 className="md:text-4xl font-bold text-gray-100 pb-4">About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis id
          recusandae a soluta quam eaque magni delectus ducimus incidunt vitae
          hic vero, voluptates, nihil nostrum molestias. Laboriosam ab ducimus
          libero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur magnam aliquid aperiam ut? Laudantium delectus ratione
          cupiditate, illo hic eum perspiciatis aliquid officia aspernatur
          beatae molestias ad magni suscipit corporis.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum
          delectus blanditiis dolorem, voluptate porro quas molestias quae
          corporis perspiciatis eius soluta voluptates quibusdam illo ullam,
          beatae at omnis ratione?
        </p>
      </div>
      <div className="pt-6">
        <img src={me} className="w-2/4 rounded-md mt-8 mr-8" />
      </div>
    </div>
  );
}

export default About;
