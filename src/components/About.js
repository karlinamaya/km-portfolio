import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {

  const handleNavigation = (section, offset = 100) => {
    const scrollToSection = () => {
      const element = document.getElementById(section);
      if (element) {
        const yOffset = offset;
        const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    setTimeout(scrollToSection, 0);
  };

  return (
    <section id="about">
      <div className="about-container">
        <h1>Hi, I'm Karlina</h1>
        <p>I'm a <TypeAnimation
          sequence={[
            'designer 🎨',
            1100,
            'developer 💻',
            1100,
            'researcher 🔎',
            1100,
          ]}
          speed={53}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
        /></p>
        <div className="social-icons">
          <a href="https://github.com/karlinamaya" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ fontSize: 23, color: 'white', margin: '0 10px' }} />
          </a>
          <a href="https://www.linkedin.com/in/karlina-maya/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ fontSize: 23, color: 'white', margin: '0 10px' }} />
          </a>
        </div>
      </div>
      <a href="#projects" className="view-projects-button" onClick={() => handleNavigation('projects', -100)}>
        view projects
      </a>
    </section>
  );
};

export default About;
