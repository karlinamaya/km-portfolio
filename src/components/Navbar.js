import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (section, offset = 100) => {
    const scrollToSection = () => {
      const element = document.getElementById(section);
      if (element) {
        const yOffset = offset; 
        const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
  
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection();
      }, 100);
    } else {
      setTimeout(scrollToSection, 0);
    }
  };
  

  return (
    <nav>
      <ul>
        <li><a href="#about" onClick={() => handleNavigation('about')}>home</a></li>
        <li><a href="#projects" onClick={() => handleNavigation('projects', -100)}>projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
