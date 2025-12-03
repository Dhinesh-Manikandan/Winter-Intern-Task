import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";
// import HeroImageTilt from "../Feature_Motion/HeroImageTilt"; // Integrated below
// import LogosScroll from "../LogosScroll/LogosScroll"; // You can keep this outside in App.jsx

const Hero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailRegex.test(email)) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    } else {
      alert("Please enter a valid @gmail.com email address");
    }
  };

  // ===== Scroll-based tilt motion =====
  const { scrollYProgress } = useScroll();

  // Adjusted values to match the subtle "Uncovered" tilt feel
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [20, 0]); // Starts tilted back 20deg, flattens to 0
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  return (
    <section id="hero" className="hero">
      
      {/* ================== ROTATING RINGS (Background) ================== */}
      <div className="sync-cycles-circles">
        <div></div> {/* Ring 1 */}
        <div></div> {/* Ring 2 */}
        <div></div> {/* Ring 3 */}
        <div></div> {/* Ring 4 */}
        <div></div> {/* Ring 5 */}
        <div></div> {/* Ring 6 */}
        <div></div> {/* Ring 7 */}
        <div></div> {/* Ring 8 */}
         <div></div> {/* Ring 9 */}
        <div></div> {/* Ring 10 */}
        <div></div> {/* Ring 11*/}
        <div></div> {/* Ring 12 */}
        <div></div> {/* Ring 13 */}
        <div></div> {/* Ring 14 */}
        <div></div> {/* Ring 15 */}
        {/* <div></div> Ring 16 */}
      </div>

      {/* ================== GRID & VIGNETTE OVERLAYS ================== */}
      {/* These pseudo-elements are handled in CSS (::before/::after) */}

      {/* ================== SUCCESS MESSAGE ================== */}
      {submitted && <div className="email-status">Email Submitted</div>}

      {/* ================== HERO CONTENT (Text & Form) ================== */}
      <div className="hero-content">
        
        {/* Top badge */}
        <div className="hero-whats-new">
            <span className="whats-new-badge">Feature highlight</span>
            <a href="#features" className="whats-new-link">
              Competitor monitoring
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
        </div>

        {/* TITLE */}
        <h1 className="hero-title">
          Monitor your competitors,<br />
          win more deals.
        </h1>

        {/* SUBTITLE */}
        <p className="hero-subtitle">
          Automated Competitive and Market Intelligence<br />
          for B2B SaaS Marketing & Sales
        </p>

        {/* SUBSCRIPTION SECTION */}
        <div className="subscription-container">
          <form className="subscription-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="subscription-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="subscription-button" type="submit">
              Get Started Free ➤
            </button>
          </form>

          <div className="subscription-info">
            <p>No risk 14-day trial period</p>
            <span className="dot">✦</span> {/* Changed dot to sparkle to match image */}
            <p>No onboarding fees</p>
          </div>
        </div>

      </div>

      {/* ================== TILTED DASHBOARD IMAGE ================== */}
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          y,
          transformStyle: "preserve-3d",
        }}
        className="tilted-hero-image-wrapper"
      >
        <div className="dashboard-glow"></div> {/* Glow behind image */}
        <img
          src="https://framerusercontent.com/images/1aTT9zmu9BO3MlacM0Vqso2HtE.png" 
          alt="Uncovered Dashboard"
          className="tilted-hero-image"
        />
      </motion.div>

    </section>
  );
};

export default Hero;