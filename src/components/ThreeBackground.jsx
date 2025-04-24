import { useEffect, useState } from "react";

// This is a CSS-based animated background that mimics a 3D particle field
// without requiring Three.js libraries
const ThreeBackground = ({ isDarkMode }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const particleCount = Math.min(window.innerWidth / 10, 100); // Responsive particle count
      const newParticles = [];

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100, // % position
          y: Math.random() * 100, // % position
          size: Math.random() * 4 + 1, // 1-5px
          speedX: (Math.random() - 0.5) * 0.2, // movement speed
          speedY: (Math.random() - 0.5) * 0.2, // movement speed
          opacity: Math.random() * 0.5 + 0.1, // 0.1-0.6
        });
      }

      setParticles(newParticles);
    };

    generateParticles();

    // Regenerate on resize
    window.addEventListener("resize", generateParticles);
    return () => window.removeEventListener("resize", generateParticles);
  }, []);

  // Animation loop for particle movement
  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          x: (particle.x + particle.speedX + 100) % 100,
          y: (particle.y + particle.speedY + 100) % 100,
        }))
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-primary-light to-gray-200 dark:from-primary-dark dark:via-primary-dark dark:to-black"></div>

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full transition-opacity duration-1000"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            backgroundColor: isDarkMode ? "#03dac6" : "#00bcd4",
            boxShadow: `0 0 ${particle.size * 2}px ${
              isDarkMode ? "#03dac680" : "#00bcd480"
            }`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full opacity-20 blur-[100px] animate-pulse"
        style={{ background: isDarkMode ? "#03dac6" : "#00bcd4" }}></div>
      <div
        className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full opacity-15 blur-[80px] animate-pulse delay-1000"
        style={{ background: isDarkMode ? "#03dac6" : "#00bcd4" }}></div>
    </div>
  );
};

export default ThreeBackground;
