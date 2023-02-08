import React from "react";

function ExperienceItems({ date, title, duration, details }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-white">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-lime-700 rounded-md">
            {date}
          </span>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <div className="my-1 text-sm font-normal leading-none text-lime-500">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal text-stone-100">{details}</p>
      </li>
    </ol>
  );
}

export default ExperienceItems;
