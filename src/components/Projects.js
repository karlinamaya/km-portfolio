import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        <div className="project">
          <img src="/images/connectfour.png" alt="Connect Four" />
          <h2>Connect Four</h2>
          <p>Description</p>
        </div>
        <div className="project">
          <img src="/images/snout.png" alt="Snout" />
          <h2>Snout</h2>
          <p>Description</p>
        </div>
        <div className="project">
          <img src="/images/amplifyher.png" alt="Project 3" />
          <h2>AmplifyHER</h2>
          <p>Description</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;