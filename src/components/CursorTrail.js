import React, { useEffect, useState, useRef } from 'react';
import '../styles/CursorTrail.css';

const CursorTrail = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth interpolation with lag
      const dx = mousePosition.current.x - cursorPosition.current.x;
      const dy = mousePosition.current.y - cursorPosition.current.y;
      
      cursorPosition.current.x += dx * 0.25;
      cursorPosition.current.y += dy * 0.25;
      
      setCursor({
        x: cursorPosition.current.x,
        y: cursorPosition.current.y,
      });
      
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${cursor.x}px`,
        top: `${cursor.y}px`,
      }}
    />
  );
};

export default CursorTrail;
