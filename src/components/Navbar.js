// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="#about">KM</a>
      </div>
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;