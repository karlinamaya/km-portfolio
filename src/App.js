import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;