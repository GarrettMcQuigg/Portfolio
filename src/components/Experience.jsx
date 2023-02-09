import React from "react";
import timeline from "../data/timeline";
import ExperienceItems from "./ExperienceItems";

function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center"
    >
      <div className="w-3/4 sm:w-6/12 xl:w-4/12">
        <h1 className="md:text-4xl font-bold text-gray-100 pb-4">Experience</h1>
        <div>
          {timeline.map((item) => (
            <ExperienceItems
              date={item.date}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
