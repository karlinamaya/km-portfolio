import React, { useEffect, useRef } from 'react';
import '../styles/SpaceBackground.css';

const SpaceBackground = () => {
  const containerRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mousePosition.current = {
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: (e.clientY / innerHeight - 0.5) * 2,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Generate random stars
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    speed: Math.random() * 0.5 + 0.3,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  useEffect(() => {
    const animate = () => {
      if (containerRef.current) {
        const layers = containerRef.current.querySelectorAll('.star-layer');
        layers.forEach((layer, index) => {
          const speed = (index + 1) * 0.04;
          const x = mousePosition.current.x * speed * 50;
          const y = mousePosition.current.y * speed * 50;
          layer.style.transform = `translate(${x}px, ${y}px)`;
        });
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="space-background" ref={containerRef}>
      {[1, 2, 3].map((layer) => (
        <div key={layer} className="star-layer">
          {stars
            .filter((_, i) => i % 3 === layer - 1)
            .map((star) => (
              <div
                key={star.id}
                className="star"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  opacity: star.opacity,
                  animationDelay: `${star.id * 0.1}s`,
                }}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default SpaceBackground;
