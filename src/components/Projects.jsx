import React from "react";
import projects from "../data/projects";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center justify-center pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
