import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import profileData from "./assets/Data";
import Footer from "./components/Footer";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const changeSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <>
      <Navbar changeSection={changeSection} />
      {/* Conditional rendering from Navbar response  */}
      {currentSection == "home" && <Home data={profileData} />}
      {currentSection == "skills" && (
        <Skills data={profileData} pic={profileData.bgpic} />
      )}
      {currentSection == "experience" && <Experience />}
      {currentSection == "contact" && <Contact />}
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
