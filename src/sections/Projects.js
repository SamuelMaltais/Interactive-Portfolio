import React, { forwardRef, useState } from "react";
import "./Projects.css";
import Data from "./ProjectData.js";
import ProjectCard from "./ProjectCard";
import { ArrowDropDown } from "@mui/icons-material";

const Projects = forwardRef((props, ref) => {
  let data = Data();
  const [otherProjects, setOtherProjects] = useState(false);
  var projectsStart = [];
  var projectsEnd = [];
  const mediaQuery = window.matchMedia("(max-width: 500px)");
  var offset = false;
  for (var i = 0; i < data.length; i++) {
    if (i % 2 == 0) {
      offset = false;
    } else {
      offset = true;
    }
    if (mediaQuery.matches) {
      offset = true;
    }
    if (i < 3) {
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
    } else {
      projectsEnd.push(
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
  }

  return (
    <div className="projects-container" ref={ref}>
      <h1>Checkout my work 🔥</h1>
      {projectsStart}
      {otherProjects ? projectsEnd : ""}
      <button
        className="nice-button"
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          visibility: otherProjects ? "hidden" : "visible",
        }}
        onClick={() => setOtherProjects(true)}
      >
        {" "}
        See more projects <ArrowDropDown />
      </button>
    </div>
  );
});
export default Projects;
