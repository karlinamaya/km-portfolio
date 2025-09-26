import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {

  const handleNavigation = (section) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' }); // honors scroll-margin-top
    }
  };

  return (
    <section id="about">
      <div className="about-container">
        <h1>
          <TypeAnimation
            sequence={[
              'Hi, I\'m Karlina 👋',
              2000,
            ]}
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            cursor={false}
          />
        </h1>
        <div className="ux-designer-tagline">
          <p>
            Nice to meet you! I'm passionate about creating <span className="gradient-text">intuitive</span> and <span className="gradient-text">accessible</span> user experiences.
          </p>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/karlina-maya/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ fontSize: 23, color: 'white', margin: '0 10px' }} />
          </a>
          <a href="https://github.com/karlinamaya" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ fontSize: 23, color: 'white', margin: '0 10px' }} />
          </a>
        </div>
      </div>
      <a
        href="#projects"
        className="view-projects-button"
        onClick={(e) => { e.preventDefault(); handleNavigation('projects'); }}
      >
        view projects
      </a>
    </section>
  );
};

export default About;