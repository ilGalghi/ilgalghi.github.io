
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-bg min-h-screen text-text-primary selection:bg-accent/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

export default App;
