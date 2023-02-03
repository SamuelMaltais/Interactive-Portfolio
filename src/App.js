import { useRef } from 'react';
import './App.css';
import ParticlesBg from "./components/Particles";
import Navbar from './Navbar';
import InteractiveProject from './sections/InteractiveProject';
import Projects from './sections/Projects';
import Skills from './sections/Skills';


function App() {
  const header = useRef(null)
  return (
    <>
    {/* <ParticlesBg magic={header}/> */}
    <div className="App">
      <header className="App-header" ref={header}>
        <Navbar id="home"/>
        <InteractiveProject />
      </header>
      <div className='indexwtv'>
      <Projects />
      <Skills />
      </div>
    </div>
    </>
  );
}

export default App;
