import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-24">
      <h1 className="md:text-7xl font-bold text-gray-100">Garrett McQuigg</h1>
      <p className="pt-3 pb-5 text-4xl font-bold text-gray-400">
        Software Engineer & Web Developer
      </p>
      <p className="text-lg max-w-2xl p-4 leading-7">
        I'm a full stack developer with a passion to learn and the drive to
        problem solve. <br />I received my bachelors degree from the{" "}
        <b className="text-lime-500">University of Arkansas</b> as well as my
        full stack certifications from the{" "}
        <b className="text-lime-500">Springboard</b>{" "}
        <i className="text-lime-500">Software Engineering Bootcamp</i>.
        <br />
        All of my projects are built from scratch with a heavy emphasis on
        following real world work-flow that I would use in a day-to-day job.
      </p>
      <a
        className="rounded border-2 border-lime-500 py-3 px-8 hover:bg-lime-900/[0.2]"
        href=""
      >
        <span className="text-lime-500 tracking-wider">
          <b>Résumé</b>
        </span>
      </a>
    </div>
  );
}

export default Intro;
