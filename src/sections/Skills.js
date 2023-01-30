import "./Skills.css"
import { Autocomplete, InputLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { Search, SnowboardingRounded } from "@mui/icons-material";

function Skills() {
    const options=[
        {label: "Javascript", mastery:100},
        {label: "Css", mastery: 90},
        {label: "React", mastery: 100},
        {label: "ExpressJs", mastery: 100},
        {label: "No SQL (mongodb)", mastery: 80},
        {label: "SQL", mastery: 70},
        {label: "C#", mastery: 60},
        {label: "C++", mastery: 70},
        {label: "Python", mastery: 90},
        {label: "Excel / vba", mastery: 70},
    ]


    return ( 
        <div className="skills-container">
        <h2>Skills summary <SnowboardingRounded /></h2>        
        
        <div className="search-box">
        <InputLabel> Search the tech stack your company uses</InputLabel>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Technologies" />}
        onChange={(e, value) => console.log(value)}
        />
        </div>

        </div>
     );
}

export default Skills;