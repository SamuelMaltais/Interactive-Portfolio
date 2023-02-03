import "./Skills.css"
import { Autocomplete, InputLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { SnowboardingRounded } from "@mui/icons-material";
import GaugeChart from 'react-gauge-chart'
import { useState } from "react";
import "chart.js/auto"
import { Chart } from "react-chartjs-2";
import {data, options, setting} from "./SkillsData.js"

function Skills() {
    
    const [technologie, setTechnologie] = useState(options[0])

    return ( 
        <div style={{display:"flex",flexDirection: "column" , alignItems:"center"}}>
        <h2>Skills summary <SnowboardingRounded /></h2>    
        <div className="skills-container"> 
        <div className="search-box">
        
        <InputLabel> Search the tech stack your company uses</InputLabel>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Technologies" />}
        onChange={(e, value) => setTechnologie(value)}
        />
        </div>
        <div className="search-box">
        <h2> Mastery </h2>
        <GaugeChart id="gauge-chart1" 
        percent={technologie===null ? 0 : technologie.mastery / 100}
        hideText
        colors={['#EA4228', '#F5CD19', '#5BE12C']}
        style={{zIndex: "10", color:"black"}}
        />
        <h2>Experience description</h2>
        <p>{technologie===null ? "" : technologie.description}</p>
        </div>
        </div>
        <Chart data={data} type="bar" className="chart" options={setting}/>

        </div>
     );
}

export default Skills;