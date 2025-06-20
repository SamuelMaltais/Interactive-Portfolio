import "./ProjectCard.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";

function ProjectCard(props) {
  let codeButton;
  let liveCodeButton;
  let clicked = false;
  const query = window.matchMedia("(max-width: 500px)");
  if (query.matches === true) {
    clicked = false;
  }

  const [buttonClicked, setButtonClicked] = useState(clicked);

  if (props.hasCode) {
    codeButton = (
      <a href={props.codeLink} target="_blank">
        <button className="nice-button" rel="noreferrer">
          View code
        </button>
      </a>
    );
  }
  if (props.hasLiveVersion) {
    liveCodeButton = (
      <a href={props.liveVersionLink} target="_blank" rel="noreferrer">
        <button className="nice-button">View live version</button>
      </a>
    );
  }

  const mediaQuery = window.matchMedia("(max-width: 500px)");
  // Check if the media query is true
  if (mediaQuery.matches) {
  }

  var MoreButton = (
    <MoreHorizIcon
      className={buttonClicked ? "arrow-icon" : "arrow-icon-clicked"}
    />
  );

  const image = <img src={props.image} alt="" className="card-img" />;
  return (
    <div
      className="project-card-container"
      // onClick={() => setButtonClicked(!buttonClicked)}
    >
      {props.offset ? image : ""}
      {/* {props.offset ? MoreButton : ""} */}
      <div
        className={
          buttonClicked ? "project-description" : "project-description-clicked"
        }
      >
        <h2>{props.title}</h2>
        <h3>Skills used</h3>
        <ul>
          <div className="seperators">
            <li>{props.skills[0]}</li>
            <li>{props.skills[1]}</li>
          </div>
          <div className="seperators">
            <li>{props.skills[2]}</li>
            <li>{props.skills[3]}</li>
          </div>
        </ul>
        <h3>Role description</h3>
        <p>{props.description}</p>
        <div className="button-seperator">
          {liveCodeButton}
          {codeButton}
        </div>
      </div>
      {/* {props.offset ? "" : MoreButton} */}
      {props.offset ? "" : image}
    </div>
  );
}

export default ProjectCard;
