import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import './HeroImageTilt.css';
const HeroImageTilt = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"], 
    // "end end" → bottom of image reaches bottom of viewport
    // "start start" → top of image reaches top of viewport
  });

  // Progressive rotation: starts tilted back (-70°) when entering view, gradually to 0°
  const rotateXBase = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const rotateX = useSpring(rotateXBase, { stiffness: 100, damping: 25 });

  // Optional: slight Y translation to enhance depth perception
  const translateYBase = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const translateY = useSpring(translateYBase, { stiffness: 100, damping: 25 });

  return (
    <div className="hero-tilt-section">
      <div className="tilt-wrapper" ref={ref}>
        <motion.img
          src="https://framerusercontent.com/images/1aTT9zmu9BO3MlacM0Vqso2HtE.png"
          className="tilt-image"
          style={{
            rotateX,
            translateY,
            transformOrigin: "bottom center", // pivot from bottom
            transformStyle: "preserve-3d",
          }}
        />
      </div>
    </div>
  );
};

export default HeroImageTilt;
