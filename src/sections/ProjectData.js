import Messenger from "./project-images/messenger.png";
import Maps from "./project-images/google-maps.jpg";
import Mask from "./project-images/mask.PNG";
import Magnetometer from "./project-images/magnetometer.jpg";
import Alpha from "./project-images/Alpha.PNG";
import TvControl from "./project-images/TvControl.PNG";
import FaitFrette from "./project-images/FaitFrette.PNG";
import JavaFx from "./project-images/javaFx.PNG";
import Green from "./project-images/green.png";
import Headspace from "./project-images/headspace.jpg";
import FollowUp from "./project-images/follow-up.jpg";
import Human from "./project-images/strokes.png";

let data = [
  {
    image: Human,
    title: "Human Deep Dive (Winner)",
    skills: ["Unity VR", "C#", "Meta SDK", "OpenAI Api"],
    description:
      "Human Deep Dive is an immersive VR app that lets users explore the human body layer by layer—skin, muscles, bones, and organs. Users can click on any organ to see how it works and what happens when it’s affected by diseases or lifestyle choices. With speech-to-text and text-to-speech functionalities, users can ask questions like, “What does the liver do? and get instant, narrated answers powered by AI. Check out the demo, it's really cool ! https://youtu.be/VB5INwtQqZM ",
    hasCode: true,
    hasLiveVersion: false,
    liveVersionLink: "https://greeneighborhood.netlify.app/",
    codeLink: "https://devpost.com/software/humandeepdive",
    parOf: "hackathon",
  },
  {
    image: FollowUp,
    title: "Follow Up! (Winner)",
    skills: ["React Native", "Express & NodeJs", "Gemnini API", "React"],
    description:
      "Follow Up is an app designed to streamline and improve the post-appointment experience, specifically for pharmacy-related interactions. It allows pharmacists to easily follow up with patients after their appointments to ensure they’re on track with their prescriptions, answer any questions, remind them of refills, and provide ongoing support. Patients, on the other hand, can stay connected with their pharmacy, receive notifications about their medications, and get assistance when needed, all from the convenience of their phone.",
    hasCode: true,
    hasLiveVersion: false,
    liveVersionLink: "https://greeneighborhood.netlify.app/",
    codeLink: "https://devpost.com/software/follow-up-8oakln",
    parOf: "hackathon",
  },
  {
    image: Headspace,
    title: "Headspace",
    skills: ["Unity", "AI Api's", "C#", "3D Modelling"],
    description:
      "HeadSpace takes your journal entries and turns them into a living, breathing world. As you write or speak your thoughts, the game uses AI to interpret your words and generate a 3D environment that reflects your emotions. Whether it's a serene forest when you're feeling calm or a stormy sea when you're overwhelmed, the environment changes to match your mood. The goal is to provide a unique and immersive way for players to explore their emotions and gain insight into their mental state.",
    hasCode: true,
    hasLiveVersion: false,
    liveVersionLink: "https://greeneighborhood.netlify.app/",
    codeLink: "https://devpost.com/software/headspace-bd1ytu",
    parOf: "hackathon",
  },
  {
    image: Green,
    title: "Greener Neighbourhood",
    skills: [
      "React js",
      "Montreal Data API",
      "Firebase Auth",
      "Python (Flask)",
    ],
    description:
      "Our website takes data provided by the city of Montreal to highlight which neighborhoods/areas on the island are doing well in which aspects of sustainable development and vice versa. The user can choose what aspect to focus on, and the map is colored so that the more polluted areas appear red and the greener ones, well, green.",
    hasCode: true,
    hasLiveVersion: true,
    liveVersionLink: "https://greeneighborhood.netlify.app/",
    codeLink: "https://devpost.com/software/greenei",
    parOf: "hackathon",
  },
  {
    image: FaitFrette,
    title: "Travel recommendation based on weather",
    skills: [
      "React js",
      "Weather API",
      "DNS configuration",
      "SVG and material UI",
    ],
    description:
      "Built this website during a hackathon to recommend cities to travel to based on desired weather. This website is usefull for winter sports lovers and I use it myself to choose mountains I should go to",
    hasCode: true,
    hasLiveVersion: false,
    liveVersionLink: "http://faitfrette.tech/",
    codeLink: "https://github.com/SamuelMaltais/fait-frette.tech",
    parOf: "hackathon",
  },
  {
    image: TvControl,
    title: "Webapp to control lobby tv",
    skills: ["Express js", "React js", "AWS S3", "Heroku"],
    description:
      "Built a fullstack website in order for McGill employees to publish pictures to the lobby tv. The website also contains a control page that allows to see and delete all pictures on the S3 bucket.",
    hasCode: true,
    hasLiveVersion: true,
    liveVersionLink: "https://mcgilldisplay.netlify.app/",
    codeLink: "https://github.com/SamuelMaltais/TvDisplayForSchool",
    parOf: "mcgill",
  },
  {
    image: JavaFx,
    title: "JavaFx registering system",
    skills: ["Java", "Backend TCP/IP", "Multithreading", "FXML"],
    description:
      "During this project, we built a javaFx frontend and a Java socket server in order to display classes and allow registration to those classes. A regex validation system as well as multithreading was used to ensure smooth user experience.",
    hasCode: true,
    hasLiveVersion: false,
    liveVersionLink: "",
    codeLink: "https://github.com/SamuelMaltais/InscriptionServeur",
    parOf: "hackathon",
  },
  {
    image: Alpha,
    title: "Alpha anywhere database",
    skills: ["Active directory", "SQL & MySQL", "Node", "Alpha software"],
    description:
      "My role was to migrate the database from static DBF files to a MySQL server hosted on Azure. I was also tasked to update the security system to allow user to login  with their McGill credentials from the Active Directory.",
    hasCode: false,
    hasLiveVersion: true,
    liveVersionLink: "https://sky2.campus.mcgill.ca/tabbedui_Main_Page.a5w",
    parOf: "mcgill",
  },
  {
    image: Magnetometer,
    title: "Magnetometer experiment",
    skills: ["Lock-in amps", "Generators", "Applied physics", "Arduino & C"],
    description:
      "I tested and revived old equipement in order for students to prove the theoratical relationship between temperature and magnetic propreties of metals. I was tasked to use arduino to read and interpret analog data from the many sensors with the maximum 10 bit resolution.",
    hasCode: false,
    hasLiveVersion: false,
    liveVersionLink: "",
    parOf: "mcgill",
  },
  {
    image: Messenger,
    title: "Messenger Chatbot",
    skills: ["Express js", "Webhooks", "Heroku", "JSON"],
    description:
      "This was towards the very beginning of my coding journey. I built a chatbot that would propose reply options and awnser. It was also capable of notifying users about events.",
    hasCode: true,
    hasLiveVersion: false,
    codeLink: "https://github.com/SamuelMaltais1/Messenger-chatbot",
    liveVersionLink: "",
    partOf: "hackathon",
  },
  {
    image: Maps,
    title: "Foodbank database",
    skills: ["Google cloud API", "Python & Flask", "SQL alchemy", "JSON"],
    description:
      "This was the towards very beginning of my coding journey. We managed with our minimal knowledge to have a basic webserver that would get adresses from a spreedsheet,then find its coordinates on map and put it on the index.php page.",
    hasCode: true,
    hasLiveVersion: false,
    codeLink: "https://github.com/SamuelMaltais/marihacks2021",
    liveVersionLink: "",
    parOf: "hackathon",
  },
  {
    image: Mask,
    title: "Mask simulation",
    skills: ["Unity", "C#", "Python", "Pandas"],
    description:
      "I coded a basic particle creator with velocity that followed the standard deviation of what we had read. I also made a basic UI to change masks.",
    hasCode: true,
    hasLiveVersion: false,
    codeLink: "https://mcgill-phys-hack-2020.devpost.com/project-gallery",
    liveVersionLink: "",
  },
];
function Data() {
  return data;
}

export default Data;
