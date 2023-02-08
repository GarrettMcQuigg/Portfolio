import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-12 pb-24">
      <h1 className="md:text-7xl font-bold text-gray-100">Garrett McQuigg</h1>
      <p className="pt-3 pb-5 text-4xl font-bold text-gray-400">
        Software Engineer & Web Developer
      </p>
      <p className="text-lg max-w-2xl p-4 leading-7">
        I'm a full stack developer with a passion to learn and the drive to
        problem solve. <br />I received my bachelors degree from the{" "}
        <b className="text-orange-700">University of Arkansas</b> as well
        as my full stack certifications from the{" "}
        <b className="text-orange-700">Springboard</b>{" "}
        <i className="text-orange-700">Software Engineering Bootcamp</i>.
        <br />
        All of my projects are built from scratch with a heavy emphasis on
        following real world work-flow that I would use in a day-to-day job.
      </p>
      <button className="rounded border-2 border-orange-700 h-12 hover:border-orange-300">
        <span className="p-8 text-orange-700 tracking-wider hover:text-orange-300">
          <b>Résumé </b>
        </span>
      </button>
    </div>
  );
}

export default Intro;
