import React, { useEffect, useRef } from 'react';
import '../styles/CursorTrail.css';

const CursorTrail = () => {
  const svgRef = useRef(null);
  const particlesRef = useRef([]);
  const pointsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const posRef = useRef({ x: -9999, y: -9999 });
  const requestRef = useRef();
  const hasMovedRef = useRef(false);

  // Configuration matching Cursor2 (Trail) from marvinx demo
  const config = {
    nbrParticles: 300,
    speed: 0.5,
    delta: 0.06,
    color1: 'rgb(85, 88, 218)',  // blue/purple from home page gradient
    color2: 'rgb(95, 209, 249)', // light cyan from home page gradient
  };

  const diagonalWindow = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return Math.ceil(Math.sqrt(width * width + height * height));
  };

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const particleCount = isTouchDevice ? 120 : config.nbrParticles;
    const radius = 12; // Small cursor size, similar to a normal cursor

    // Initialize SVG dimensions
    const updateDimensions = () => {
      svg.setAttribute('width', window.innerWidth);
      svg.setAttribute('height', window.innerHeight);
      svg.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
    };
    updateDimensions();

    // Create gradient
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'trail-gradient');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', config.color1);
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', config.color2);
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.appendChild(defs);

    // Create particles group (hidden until first mouse move)
    const particlesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    particlesGroup.classList.add('particles');
    particlesGroup.style.opacity = '0';
    particlesGroup.style.transition = 'opacity 0.3s ease';
    svg.appendChild(particlesGroup);

    // Cursor pointer path (standard arrow cursor shape)
    const cursorPath = 'M 0,0 L 0,16 L 4,12 L 7,18 L 9,17 L 6,11 L 12,11 Z';
    const cursorSize = 18;

    // Create particles
    const particles = [];
    const points = [];
    
    for (let i = 0; i < particleCount; i++) {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', cursorPath);
      path.setAttribute('fill', "url('#trail-gradient')");
      path.setAttribute('id', String(i));
      path.style.transformOrigin = '0 0';
      particlesGroup.appendChild(path);
      particles.push(path);
      points.push({
        node: path,
        x: posRef.current.x,
        y: posRef.current.y,
      });
    }

    // Sort particles in descending order (for proper layering)
    particles.sort((a, b) => Number(b.id) - Number(a.id));
    particles.forEach(p => particlesGroup.appendChild(p));

    particlesRef.current = particles;
    pointsRef.current = points;

    // Mouse/touch move handler
    const handleMove = (e) => {
      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        particlesGroup.style.opacity = '1';
      }
      
      if (e.type === 'touchmove') {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      } else {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
      }
      
      // Initialize position on first move
      if (posRef.current.x === -9999) {
        posRef.current.x = mouseRef.current.x;
        posRef.current.y = mouseRef.current.y;
        // Initialize all points to current position
        for (const point of pointsRef.current) {
          point.x = mouseRef.current.x;
          point.y = mouseRef.current.y;
        }
      }
    };

    // Animation loop
    const animate = () => {
      // Only animate if mouse has moved
      if (!hasMovedRef.current) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Update position with smooth interpolation
      const diffX = mouseRef.current.x - posRef.current.x;
      const diffY = mouseRef.current.y - posRef.current.y;
      posRef.current.x += diffX * config.speed;
      posRef.current.y += diffY * config.speed;

      // Update particles with trail effect
      const posTrail = { x: posRef.current.x, y: posRef.current.y };
      
      for (let i = 0; i < pointsRef.current.length; i++) {
        const point = pointsRef.current[i];
        const nextPoint = pointsRef.current[i + 1] || pointsRef.current[0];
        
        point.x = posTrail.x;
        point.y = posTrail.y;
        point.node.style.transform = `translate(${posTrail.x}px, ${posTrail.y}px)`;
        
        posTrail.x += (nextPoint.x - point.x) * config.delta;
        posTrail.y += (nextPoint.y - point.y) * config.delta;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });
    window.addEventListener('resize', updateDimensions);
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('resize', updateDimensions);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="cursor-trail-svg"
      preserveAspectRatio="none"
    />
  );
};

export default CursorTrail;
