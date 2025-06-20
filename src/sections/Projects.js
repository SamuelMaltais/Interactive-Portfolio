import React, { forwardRef, useState } from "react";
import "./Projects.css";
import Data from "./ProjectData.js";
import ProjectCard from "./ProjectCard";
import { ArrowDropDown } from "@mui/icons-material";

const Projects = forwardRef((props, ref) => {
  let data = Data();
  var projectsStart = [];
  const mediaQuery = window.matchMedia("(max-width: 500px)");
  var offset = true;
  for (var i = 0; i < data.length; i++) {
    projectsStart.push(
      <ProjectCard
        title={data[i].title}
        description={data[i].description}
        codeLink={data[i].codeLink}
        hasCode={data[i].hasCode}
        image={data[i].image}
        hasLiveVersion={data[i].hasLiveVersion}
        skills={data[i].skills}
        liveVersionLink={data[i].liveVersionLink}
        offset={offset}
      />
    );
  }

  return (
    <>
      <div className="projects-container" ref={ref}>
        <h1>Checkout my projects 🔥</h1>
        {projectsStart}
      </div>
    </>
  );
});
export default Projects;
