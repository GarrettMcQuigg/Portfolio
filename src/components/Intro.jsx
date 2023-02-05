import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-10 pb-10">
      <h1 className="md:text-5xl font-bold">
        Garrett McQuigg
      </h1>
      <p className="pt-3 pb-5 text-xl opacity-60 font-bold">Software Engineer & Web Developer</p>
      <p className="max-w-2xl">I'm a full stack developer with a passion to learn and the drive to problem solve. <br />
      I received my bachelors degree from the <b>University of Arkansas</b> as well as my full stack certifications from the <b>Springboard</b> <i>Software Engineering Bootcamp.</i><br />
      All of my projects are built from scratch with a heavy emphasis on following real world work-flow that I would use in a day-to-day job.
      </p>
    </div>
  );
}

export default Intro;
