import React from "react";

function ProjectItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-white rounded-md overflow-hidden"
    >
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-28 md:h-28 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold flex items-center justify-center">
          {title}
        </h3>
        <p className="flex flex-wrap items-center justify-center gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default ProjectItem;
