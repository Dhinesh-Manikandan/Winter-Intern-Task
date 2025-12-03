import React, { useEffect, useRef } from 'react';
import WebGLFluid from 'webgl-fluid';

const FluidBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let c = canvasRef.current;

    // --- 1. Initialize the Fluid Simulation ---
    // The library handles the WebGL setup automatically
    if (c) {
      WebGLFluid(c, {
        IMMEDIATE: true, // Start immediately
        TRIGGER: 'hover', // React to mouse hover, not just click
        SIM_RESOLUTION: 128, // Lower = faster performance
        DYE_RESOLUTION: 1024, // Higher = sharper fluid
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 1,
        VELOCITY_DISSIPATION: 0.2,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        SPLAT_RADIUS: 0.25,
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 10,
        PAUSED: false,
        BACK_COLOR: { r: 3, g: 1, b: 22 }, // Matches your App background rgb(3, 1, 22)
        TRANSPARENT: false, // We want the black background from the fluid
      });
    }

    // --- 2. Button Hover Fade Logic ---
    const handleMouseOver = (e) => {
      // Check if hovering over a button or inside a button
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        // Add class to canvas to fade it out
        if (c) c.style.opacity = '0.2';
      }
    };

    const handleMouseOut = (e) => {
      // Check if leaving a button
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        // Restore opacity
        if (c) c.style.opacity = '1';
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0, // Behind everything
          transition: 'opacity 0.5s ease-in-out' // Smooth fade transition
      }}
    />
  );
};

export default FluidBackground;