import React from "react";
import { motion } from "framer-motion";
// import prewave from "../../Images/Prewave Logo & Brand Assets (SVG, PNG and vector) - Brandfetch_files";
import paddle from "../../Images/logo-primary.1520b460.svg";
import workmotion from "../../Images/workmotion-logo.svg";
import plugandplay from "../../Images/plug-and-play-tech-center-vector-logo-small.png";
import binance from "../../Images/binance.png";
import notch from "../../Images/Notch.png";

const logos = [notch, paddle, workmotion, plugandplay, binance];

const LogosScroll = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "20px 0",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: "50px",
        }}
        animate={{ x: ["0%", "-50%"] }} // scroll left
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" },
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            style={{ height: "40px", objectFit: "contain" }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogosScroll;
