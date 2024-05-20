
import React, { useState, useEffect } from 'react';

const RainbowSwirlCursor = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setParticles((prevParticles) => [
        ...prevParticles,
        { x: clientX, y: clientY, angle: Math.random() * 360, id: Math.random() }
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setParticles((prevParticles) => prevParticles.slice(1));
    }, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <div key={particle.id} style={particleStyle(particle)}></div>
      ))}
      <style>{styleTag}</style>
    </>
  );
};

const particleStyle = (particle) => ({
  position: 'fixed',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: `hsl(${Math.random() * 360}, 100%, 50%)`, 
  left: `${particle.x + Math.sin(particle.angle) * 20}px`,
  top: `${particle.y + Math.cos(particle.angle) * 20}px`,
  pointerEvents: 'none',
  transform: 'translate(-50%, -50%)',
  animation: 'swirl 1s forwards',
  zIndex: '1', 
});

const styleTag = `
@keyframes swirl {
  0% { opacity: 1; transform: scale(1) rotate(0deg); }
  100% { opacity: 0; transform: scale(0.5) rotate(360deg); }
}`;

const Swirlcursor = () => (
  <>
    <RainbowSwirlCursor />
  </>
);

export default Swirlcursor;

