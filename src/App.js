import './App.css';
import Navbar from './Navbar';
import InteractiveProject from './sections/InteractiveProject';
import Projects from './sections/Projects';
import Skills from './sections/Skills';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar id="home"/>
        <h1>Interactive Projects</h1>
        <InteractiveProject />
      </header>
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
