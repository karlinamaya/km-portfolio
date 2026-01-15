import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Snout from './components/Snout';
import CursorTrail from './components/CursorTrail';
import SpaceBackground from './components/SpaceBackground';
import './App.css';

const PageFade = ({ children }) => (
  <div className="page-fade">
    {children}
  </div>
);

const AppContent = () => {
  const location = useLocation();

  return (
    <div>
      <SpaceBackground />
      <CursorTrail />
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageFade><About /></PageFade>} />
        <Route path="/projects" element={<PageFade><Projects /></PageFade>} />
        <Route path="/snout" element={<PageFade><Snout /></PageFade>} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;