import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Skills from "./components/Skills";
import BuildPipeline from "./components/BuildPipeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Research />
        <Skills />
        <BuildPipeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
