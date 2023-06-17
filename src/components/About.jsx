import React from 'react';
import me from '../images/me.jpeg';

function About() {
  return (
    <div id='about' className='flex justify-center items-center flex-wrap md:flex-row sm:flex-col pt-24 pb-16'>
      <div className='grid lg:grid-cols-1 xl:grid-cols-2 md:w-7/12'>
        <div className='px-8'>
          <h1 className='md:text-4xl font-bold text-gray-100 pb-4'>About Me</h1>
          <p className='text-sm indent-8 tracking-wider'>
            My name is Garrett McQuigg and I attended the <i>University of Arkansas</i> where I received my degree in business management. Shortly after
            graduation, I wanted to increase my value to a company or team, which led me to discover my passion for web development and software engineering.
          </p>{' '}
          <br />
          <p className='text-sm indent-8 tracking-wider'>
            In September of 2021, I finally wrote my first line of code. I started my journey as a self-taught front-end developer using <i>FreeCodeCamp.org</i>{' '}
            to learn the basics of HTML, CSS, and Javascript. In May of 2022, I decided to increase my skillset by enrolling in a Full-Stack development
            bootcamp through <i>Springboard Institution</i> to learn back-end development.
          </p>
          <br />
          <p className='text-sm indent-8 tracking-wider'>
            Through the bootcamp, as well as everything I have learned on my own, I believe I'm a very well rounded developer with the hunger to continue
            learning more, but also be an asset to any team that I work with.
          </p>
          <br />
          <p className='text-sm indent-8 tracking-wider'>Here is a list of technologies I've been working with:</p>
          <ul className='grid justify-center sm:grid-cols-3 pt-4 list-disc list-inside text-lime-500 font-semibold '>
            <li>Golang</li>
            <li>React</li>
            <li>Flask</li>
            <li>Node.js</li>
            <li>Angular</li>
            <li>Express</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
        </div>
        <div className='flex justify-center xl:justify-start lg:pl-8 pt-8 lg:pt-16 md:pl-2'>
          <img src={me} className='rounded-full h-3/6 md:h-4/6 hover:scale-110 hover:translate-y-2 hover:-translate-x-2 hover:skew-y-1 hover:duration-300' />
        </div>
      </div>
    </div>
  );
}

export default About;
