// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="#about">KM</a>
      </div>
      <ul>
        <li><a href="#projects">projects</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;