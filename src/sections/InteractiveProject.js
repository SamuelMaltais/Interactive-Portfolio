// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react';


import "./InteractiveProjects.css";
import PlayRandomMoveEngine from '../components/mychessbot';

function InteractiveProject() {
  let size;
  const query = window.matchMedia("(max-width: 500px)");
  if (query.matches) {
    size = 300;
  } else {
    size = 500;
  }
  return (
    <div className="special-projects-container">
      {/* <ArrowBackIosIcon />  */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PlayRandomMoveEngine />
        <div className="special-project-description">
          <h2>Play against my chess ai !</h2>
          <p>This project is in the works right now</p>
        </div>
      </div>

      {/* <ArrowForwardIos /> */}
    </div>
  );
}

export default InteractiveProject;
