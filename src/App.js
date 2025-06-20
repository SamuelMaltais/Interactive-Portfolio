import { useRef } from "react";
import "./App.css";
import Particles from "./components/Particles";
import Navbar from "./Navbar";
import AboutMe from "./sections/AboutMe";
import InteractiveProject from "./sections/InteractiveProject";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  const skills = useRef(null);
  const projects = useRef(null);
  const home = useRef(null);
  const aboutMe = useRef(null);

  return (
    <>
      <div className="App" ref={home}>
        <header className="App-header">
          <Particles />
          <InteractiveProject />
          <Navbar
            home={home}
            projects={projects}
            skills={skills}
            aboutMe={aboutMe}
          />
        </header>

        <div className="indexwtv">
          <Projects ref={projects} />
          <Skills ref={skills} />
          <AboutMe ref={aboutMe} />
        </div>
      </div>
    </>
  );
}

export default App;
