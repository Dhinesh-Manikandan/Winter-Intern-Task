import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";
import HeroImageTilt from "../Feature_Motion/HeroImageTilt";
import LogosScroll from "../LogosScroll/LogosScroll";

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

  const rotateX = useTransform(scrollYProgress, [0, 0.4], [-45, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [120, 0]);

  return (
    <section id="hero" className="hero relative overflow-hidden">
      {/* ================== ROTATING CIRCLES ================== */}
      <div className="sync-cycles-circles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* ================== RADIAL BACKGROUND ================== */}
      <div className="radial-bg"></div>

      {/* ================== SUCCESS MESSAGE ================== */}
      {submitted && <div className="email-status">Email Submitted</div>}

      {/* ================== HERO CONTENT ================== */}
      <div className="hero-content relative z-10">
        {/* Top badge */}
        <div className="hero-whats-new-container">
          <div className="hero-whats-new">
            <div className="whats-new-badge-container">
              <div className="whats-new-badge">
                <p className="badge-text">Feature highlight</p>
              </div>
            </div>

            <a href="/" className="whats-new-link">
              <p className="link-text">Competitor monitoring</p>
              <span className="link-icon">
                <svg
                  width="14"
                  height="14"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* TITLE */}
        <div className="hero-title-container">
          <h1 className="hero-title">
            Monitor your competitors,
            <br />
            win more deals.
          </h1>
        </div>

        {/* SUBTITLE */}
        <div className="hero-description-container">
          <p className="hero-subtitle">
            Automated Competitive and Market Intelligence
            <br />
            for B2B SaaS Marketing & Sales
          </p>
        </div>

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
              Get Started Free
            </button>
          </form>

          <div className="subscription-info">
            <p>No risk 14-day trial period</p>
            <span className="dot">•</span>
            <p>No onboarding fees</p>
          </div>

        </div>
        {/* <HeroImageTilt /> */}


      </div>
      {/* ================== TILTED IMAGE (THE EFFECT YOU WANT) ================== */}
      {/* <motion.div
        style={{
          rotateX,
          opacity,
          y,
          transformStyle: "preserve-3d",
        }}
        className="tilted-hero-image-wrapper"
      >
        <img
          src="https://framerusercontent.com/images/1aTT9zmu9BO3MlacM0Vqso2HtE.png" // <-- Replace with your hero image
          alt="Dashboard"
          className="tilted-hero-image"
        />
      </motion.div> */}

    </section>
  );
};

export default Hero;
