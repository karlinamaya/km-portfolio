import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    const scrollToSection = () => {
      const element = document.getElementById(section);
      if (element) {
        // scroll-margin-top from CSS will ensure the heading is not hidden
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToSection, 120);
    } else {
      scrollToSection();
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}>
            home
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavigation('projects'); }}>
            projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;