import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
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
      <Link to="/projects" className="view-projects-button">
        view projects
      </Link>
    </section>
  );
};

export default About;