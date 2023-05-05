// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react';


import "./InteractiveProjects.css";
import PlayRandomMoveEngine from '../components/mychessbot';

function InteractiveProject() {
  
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
          <p><b>This project is in the works right now </b><br></br>
            My progress currently:<br></br>
            ✔️ Extracted games from chess.com API (with manipulations, data was not evident)
            <br></br>
            ✔️ Turned theses games into one hot encoded arrays
            <br></br>
            ✔️ Created a backend ready to have current position fed as input
            <br></br>
            ♟️ Into the process of using a voting system with other AI because of small sample size.
            <br></br>
            ♟️ Testing scikit models
          </p>
        </div>
      </div>

      {/* <ArrowForwardIos /> */}
    </div>
  );
}

export default InteractiveProject;
