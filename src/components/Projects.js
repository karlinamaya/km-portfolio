import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        <div className="project">
          <a href="https://github.com/karlinamaya/connect-four" target="_blank" rel="noreferrer noopener">
            <img src="/images/connectfour.png" alt="Connect Four" />
          </a>
          <h2>Connect Four</h2>
          <p>Developed a web-based Connect Four game with interactive gameplay</p>
          <div className="tech-buttons">
            <span className="tech-button">javascript</span>
            <span className="tech-button">html</span>
            <span className="tech-button">bootstrap css</span>
          </div>
        </div>
        <div className="project">
          <Link to="/snout">
            <img src="/images/snout.png" alt="Snout" />
          </Link>
          <h2>Snout</h2>
          <p>Designed the branding and UI for a conceptual animal adoption app</p>
          <div className="tech-buttons">
            <span className="tech-button">photoshop</span>
            <span className="tech-button">illustrator</span>
            <span className="tech-button">after effects</span>
            <span className="tech-button">figma</span>
          </div>
        </div>
        <div className="project">
          <a href="https://github.com/karlinamaya/AmplifyHER" target="_blank" rel="noreferrer noopener">
            <img src="/images/amplifyher.png" alt="AmplifyHER" />
          </a>
          <h2>AmplifyHER</h2>
          <p>Created a genre-based playlist generator aimed at uplifing underrepresented artists for <a href="https://www.winghacks.com/" target="_blank" rel="noreferrer noopener">WiNGHacks</a></p>
          <div className="tech-buttons">
            <span className="tech-button">javascript</span>
            <span className="tech-button">python</span>
            <span className="tech-button">bootstrap css</span>
            <span className="tech-button">spotify api</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;