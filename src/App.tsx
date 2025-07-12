import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import FreelancingPage from './pages/FreelancingPage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<><Navigation /><AboutPage /></>} />
          <Route path="/skills" element={<><Navigation /><SkillsPage /></>} />
          <Route path="/experience" element={<><Navigation /><ExperiencePage /></>} />
          <Route path="/freelancing" element={<><Navigation /><FreelancingPage /></>} />
          <Route path="/projects" element={<><Navigation /><ProjectsPage /></>} />
          <Route path="/education" element={<><Navigation /><EducationPage /></>} />
          <Route path="/contact" element={<><Navigation /><ContactPage /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;