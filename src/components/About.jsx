import React from "react";
import me from "../images/me.jpg";

function About() {
  return (
    <div
      id="about"
      className="flex justify-center items-center flex-wrap md:flex-row sm:flex-col pt-24 pb-16"
    >
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 md:w-7/12">
        <div className="px-8">
          <h1 className="md:text-4xl font-bold text-gray-100 pb-4">About Me</h1>
          <p className="text-sm indent-8 tracking-wider">
            My name is Garrett McQuigg and I am a 23 year old software engineer.
            I attended the <i>University of Arkansas</i> where I received my
            degree in business management. Shortly after graduation, I realized
            that I wasn't in the correct professional field to get the most out
            of myself. I began researching other opportunities that would not
            only challenge me more, but would also leave me with a great deal of
            pride and fulfillment.
          </p>{" "}
          <br />
          <p className="text-sm indent-8 tracking-wider">
            In September of 2021, I finally found my passion for software
            engineering, and wrote my first line of code. I started my journey
            as a self-taught front-end developer using <i>FreeCodeCamp.org</i>{" "}
            to learn the basics of HTML, CSS, and Javascript. In May of 2022, I
            decided to increase my skillset by enrolling in a Full-Stack
            development bootcamp through <i>Springboard Institution</i>.
          </p>
          <br />
          <p className="text-sm indent-8 tracking-wider">
            Through the bootcamp, as well as everything I have learned on my
            own, I believe I'm a very well rounded developer with the hunger to
            continue learning more, but can also be an asset to any team that I
            work with.
          </p>
          <br />
          <p className="text-sm indent-8 tracking-wider">
            Here is a list of technologies I've been working with:
          </p>
          <ul className="grid grid-cols-3 pt-4 list-disc list-inside text-lime-500 font-semibold pl-12">
            <li>Golang</li>
            <li>React</li>
            <li>Angular</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Flask</li>
            <li>Typescript</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div className="flex justify-center xl:justify-start lg:pl-8 pt-8 lg:pt-16 md:pl-2">
          <img
            src={me}
            className="max-w-xs rounded-md md:h-fit hover:scale-110 hover:translate-y-6 hover:-translate-x-6 hover:skew-y-3 hover:duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
