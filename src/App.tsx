
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { AppList } from './components/apps/AppList';
import { AppLapisCalc } from './components/apps/AppLapisCalc';
import { AppCaissaChess } from './components/apps/AppCaissaChess';
import { CaissaHowToApiKey } from './components/apps/CaissaHowToApiKey';

function MainSite() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="bg-bg min-h-screen text-text-primary selection:bg-accent/30 selection:text-white">
      <Router>
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/app" element={<AppList />} />
          <Route path="/app/lapiscalc" element={<AppLapisCalc />} />
          <Route path="/app/caissachess" element={<AppCaissaChess />} />
          <Route path="/app/caissachess/how-to-get-api-key" element={<CaissaHowToApiKey />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
