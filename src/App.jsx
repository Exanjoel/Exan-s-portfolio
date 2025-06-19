import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./theme/themecontext";
import NavBar from "./nav/nav";
import Card from "./card/persocard";
import Homesection from "./section/homeSection/homesection";
import Aboutsection from "./section/about/Aboutsection";
import Educationsection from "./section/education/Educationsection";
import SkillSection from "./section/skill/skill.jsx";
import Contact from "./section/contact/contact.jsx";
import ProjectSection from "./section/project/project.jsx";
import SettingIcon from "./card/settingIcon.jsx";

function App() {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard((prev) => !prev);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="relative bg-[var(--bg-color)] text-[var(--text-color)] lg:flex items-center lg:justify-between min-h-screen">
          {/* Avatar Button (top right, only on mobile) */}
          <button
            onClick={toggleCard}
            className="fixed top-4 right-4 md:right-8 z-50 lg:hidden w-12 h-12 border-3 border-[var(--text-color2)] rounded-full overflow-hidden bg-[var(--bg-color)] shadow-lg hover:scale-105 transition"
          >
            <img
              src="/exanprofile.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </button>
          <div className="md:hidden absolute top-8 left-1">
            <SettingIcon />
          </div>

          {/* Personal Card - mobile toggle */}
          {
            <div
              className={`block lg:hidden fixed top-0 left-0 h-screen w-full md:w-fit p-5 bg-[var(--bg-color)] z-40 shadow-lg transition-transform duration-900 ${
                showCard ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <Card />
            </div>
          }

          {/* Personal Card - always visible on desktop */}
          <div className="hidden lg:block min-w-60 h-screen p-5 relative z-10">
            <Card />
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto h-screen py-5 px-3 md:px-20 sm:mx-4 @container">
            <Routes>
              <Route path="/" element={<Homesection />} />
              <Route path="/about" element={<Aboutsection />} />
              <Route path="/education" element={<Educationsection />} />
              <Route path="/skills" element={<SkillSection />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<ProjectSection />} />
            </Routes>
          </div>

          {/* Fixed Navbar */}
          <div className="md:fixed right-9">
            <NavBar />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
