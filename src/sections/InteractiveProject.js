// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Chessboard } from "react-chessboard";
import "./InteractiveProjects.css";

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
        <Chessboard areArrowsAllowed={true} boardWidth={size} />
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
