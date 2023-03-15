import Messenger from "./project-images/messenger.png"
import Maps from "./project-images/google-maps.jpg"
import Mask from "./project-images/mask.PNG"
import Magnetometer from "./project-images/magnetometer.jpg"
import Alpha from "./project-images/Alpha.PNG"
import TvControl from "./project-images/TvControl.PNG"
import FaitFrette from "./project-images/FaitFrette.PNG"

let data = [
    {
        image: FaitFrette,
        title: "Travel recommendation based on weather",
        skills: ['React js', 'Weather API', 'DNS configuration', 'SVG and material UI'],
        description: "Built this website during a hackathon to recommend cities to travel to based on desired weather. This website is usefull for winter sports lovers and I use it myself to choose mountains I should go to",
        hasCode: true,
        hasLiveVersion: true,
        liveVersionLink: 'http://faitfrette.tech/',
        codeLink: "https://github.com/SamuelMaltais/fait-frette.tech",
        parOf:  "hackathon"
    },
    {
        image: TvControl,
        title: "Webapp to control lobby tv",
        skills: ['Express js', 'React js', 'AWS S3', 'Heroku'],
        description: "Built a fullstack website in order for McGill employees to publish pictures to the lobby tv. The website also contains a control page that allows to see and delete all pictures on the S3 bucket.",
        hasCode: true,
        hasLiveVersion: true,
        liveVersionLink: 'https://mcgilldisplay.netlify.app/',
        codeLink: "https://github.com/SamuelMaltais/TvDisplayForSchool",
        parOf:  "mcgill"
    },
    {
        image: Alpha,
        title: "Alpha anywhere database",
        skills: ['Active directory', 'SQL & MySQL', 'Node', 'Alpha software'],
        description: "My role was to migrate the database from static DBF files to a MySQL server hosted on Azure. I was also tasked to update the security system to allow user to login  with their McGill credentials from the Active Directory.",
        hasCode: false,
        hasLiveVersion: true,
        liveVersionLink: 'https://sky2.campus.mcgill.ca/tabbedui_Main_Page.a5w',
        parOf:  "mcgill"
    },
    {
        image: Magnetometer,
        title: "Magnetometer experiment",
        skills: ['Lock-in amps', 'Generators', 'Applied physics', 'Arduino & C'],
        description: "I tested and revived old equipement in order for students to prove the theoratical relationship between temperature and magnetic propreties of metals. I was tasked to use arduino to read and interpret analog data from the many sensors with the maximum 10 bit resolution.",
        hasCode: false,
        hasLiveVersion: false,
        liveVersionLink: '',
        parOf:  "mcgill"
    },
    {
        image: Messenger,
        title: "Messenger Chatbot",
        skills: ['Express js', 'Webhooks', 'Heroku', 'JSON'],
        description: "This was the very beginning of my coding journey. I built a chatbot that would propose reply options and awnser. It was also capable of notifying users about events.",
        hasCode: true,
        hasLiveVersion: false,
        codeLink: 'https://github.com/SamuelMaltais1/Messenger-chatbot',
        liveVersionLink: '',
        partOf: "hackathon"
    },
    {
        image: Maps,
        title: "Foodbank database",
        skills: ['Google cloud API', 'Python & Flask', 'SQL alchemy', 'JSON'],
        description: "This was the very beginning of my coding journey. We managed with our minimal knowledge to have a basic webserver that would get adresses from a spreedsheet,then find its coordinates on map and put it on the index.php page.",
        hasCode: true,
        hasLiveVersion: false,
        codeLink: 'https://github.com/SamuelMaltais/marihacks2021',
        liveVersionLink: '',
        parOf:  "hackathon"
    },
    {
        image: Mask,
        title: "Mask simulation",
        skills: ['Unity', 'C#', 'Python', 'Pandas'],
        description: "I coded a basic particle creator with velocity that followed the standard deviation of what we had read. I also made a basic UI to change masks.",
        hasCode: true,
        hasLiveVersion: false,
        codeLink: 'https://mcgill-phys-hack-2020.devpost.com/project-gallery',
        liveVersionLink: ''
    }
]
function Data() {
    return ( 
        data
     );
}

export default Data;
