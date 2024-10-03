import React, { useState } from 'react';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const businessCardsImages = [
    '/images/businesscard1.png',
    '/images/businesscard2.png',
    '/images/businesscard3.png'
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % businessCardsImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + businessCardsImages.length) % businessCardsImages.length);
  };

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
          <div className="slideshow-container">
            <img src={businessCardsImages[currentSlide]} alt="Business Cards" />
            <button onClick={prevSlide} className="prev">&#10094;</button>
            <button onClick={nextSlide} className="next">&#10095;</button>
          </div>
          <h2>Business Cards</h2>
          <p>Description</p>
        </div>
        <div className="project">
          <img src="/images/amplifyher.png" alt="AmplifyHER" />
          <h2>AmplifyHER</h2>
          <p>Description</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;