import React, { useState, useEffect } from 'react';

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Ambient particles
    const newParticles = [];
    const count = 35;
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 5 + 2;
      newParticles.push({
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 14 + 10}s`,
          animationDelay: `${Math.random() * 10}s`
        }
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div id="particles">
      {particles.map((p) => (
        <div key={p.id} className="mote" style={p.style}></div>
      ))}
    </div>
  );
};

export default Particles;
