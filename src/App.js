import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Snout from './components/Snout';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<><section id="about"><About /></section><section id="projects"><Projects /></section></>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/snout" element={<Snout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;