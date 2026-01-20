import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        <div className="project">
          <Link to="/snout">
            <img src="/images/snout.png" alt="Snout" />
          </Link>
          <h2>Snout</h2>
          <p>Designed the branding and UI for a conceptual animal adoption app</p>
          <div className="tech-buttons">
            <span className="tech-button">figma</span>
            <span className="tech-button">photoshop</span>
            <span className="tech-button">illustrator</span>
            <span className="tech-button">after effects</span>
          </div>
        </div>
        <div className="project">
          {/* <a href="https://github.com/karlinamaya/connect-four" target="_blank" rel="noreferrer noopener"> */}
          <a href="https://karlinamaya.github.io/connect-four/" target="_blank" rel="noreferrer noopener">
            <img src="/images/connectfour.png" alt="Connect Four" />
          </a>
          <h2>Connect Four</h2>
          <p>Designed and developed a web-based Connect Four game with interactive gameplay</p>
          <div className="tech-buttons">
            <span className="tech-button">javascript</span>
            <span className="tech-button">html</span>
            <span className="tech-button">bootstrap css</span>
            <span className="tech-button">figma</span>
          </div>
        </div>
        <div className="project">
          <a href="https://devpost.com/software/knights-wildlife-tracker" target="_blank" rel="noreferrer noopener">
            <img src="/images/wildlife-tracker.png" alt="Wildlife Tracker" />
          </a>
          <h2>Wildlife Tracker</h2>
          <p>Created a web app to track wildllife sightings around UCF's campus</p>
          <div className="tech-buttons">
            <span className="tech-button">javascript</span>
            <span className="tech-button">nodejs</span>
            <span className="tech-button">react</span>
            <span className="tech-button">google maps api</span>
            <span className="tech-button">mongodb</span>
          </div>
        </div>
        {/* <div className="project">
          <a href="https://github.com/karlinamaya/AmplifyHER" target="_blank" rel="noreferrer noopener">
            <img src="/images/amplifyher.png" alt="AmplifyHER" />
          </a>
          <h2>AmplifyHER</h2>
          <p>Created a genre-based playlist generator aimed at uplifing underrepresented artists</p>
          <div className="tech-buttons">
            <span className="tech-button">javascript</span>
            <span className="tech-button">python</span>
            <span className="tech-button">bootstrap css</span>
            <span className="tech-button">spotify api</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;