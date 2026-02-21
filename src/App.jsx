// App.jsx
import "./App.css";
// import Contact from "./sections/eCard/Contact.jsx";
// import ProfileInfo from "./sections/eCard/ProfileInfo.jsx";
import Nav from "./components/nav/Nav.jsx";
import Achievements from "./sections/main/Achievements.jsx";
import About from "./sections/main/About.jsx";
import Experience from "./sections/main/Experience.jsx";
import Publications from "./sections/main/Publications.jsx";
import Education from "./sections/main/Education.jsx";
import Skills from "./sections/main/Skills.jsx";
import Projects from "./sections/main/Projects.jsx";
import Miscellaneous from "./sections/main/Miscellaneous.jsx";
import { useState, useRef, useEffect } from "react";

function App() {

  const handleShare = async () => {
    const shareUrl = window.location.href;

    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied! Paste it anywhere to share.");
    } catch (err) {
      console.error("Clipboard failed", err);
      alert("Could not copy link. Please copy it manually: " + shareUrl);
    }
  };

  const timelineRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!timelineRef.current) return;
      timelineRef.current.scrollTop += e.deltaY;
    };

    const handleKeyDown = (e) => {
      if (!timelineRef.current) return;
      const amount = 360; // px per arrow press
      if (e.key === "ArrowDown") {
        e.preventDefault();
        timelineRef.current.scrollTop += amount;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        timelineRef.current.scrollTop -= amount;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Nav />

      <div className="app-layout">
        <div className="ecard-column">
          <header className="ecard-header">
            <h1>Get your own eCard <i className="fa-solid fa-arrow-turn-down text-xlrg"></i></h1>
          </header>

          
          <iframe
            src="https://bee-card.vercel.app/card/6jlgpncsfmltf96ft?embed=true"
            width={260} height={380}
            style={{ border:0, borderRadius:18, overflow:"hidden", display:"block" }}
            loading="lazy" title="eCard"
          />
          

          <footer className="ecard-footer">
            <span>© {new Date().getFullYear()} Shivangi Malik</span>
          </footer>
        </div>

        <div className="portfolio-section">
          <div className="timeline-column" ref={timelineRef}>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Miscellaneous />
            <Publications />
            <Education />
            <Achievements />
          </div>

          <div className="stats-column">
            <div className="stats-table">
              <div className="stats-row">
                <span>3+</span>
                <span>Years of experience</span>
              </div>
              <div className="stats-row">
                <span>10+</span>
                <span>Projects shipped</span>
              </div>
              <div className="stats-row">
                <span>4</span>
                <span>Tech stacks used</span>
              </div>
              <div className="stats-row">
                <span>2</span>
                <span>Continents worked / studied</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
