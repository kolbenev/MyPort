import { StrictMode } from "react";
import "../index.css";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

export default function Port() {
  return (
    <StrictMode>
      <div className="portfolio-root">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </StrictMode>
  );
}
