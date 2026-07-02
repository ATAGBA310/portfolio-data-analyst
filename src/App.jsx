import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Stats from "./components/sections/Stats";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;