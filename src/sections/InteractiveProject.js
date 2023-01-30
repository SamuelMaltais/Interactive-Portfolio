import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Chessboard } from "react-chessboard"
import "./InteractiveProjects.css"

function InteractiveProject() {
    return ( 
    <div className='special-projects-container'>
    <ArrowBackIosIcon /> 
    <Chessboard areArrowsAllowed={true} boardWidth={500}/>
    <div className='special-project-description'>
        <h2>Play against my chess ai !</h2>
        <p>This project is in the works right now</p>
    </div>
    <ArrowForwardIos />

    </div>
    );
}

export default InteractiveProject;