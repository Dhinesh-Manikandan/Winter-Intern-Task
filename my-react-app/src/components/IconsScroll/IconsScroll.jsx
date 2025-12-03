import React from 'react';

// --- SVG Icons (Self-contained replacements for images) ---
// These replace the imports to ensure the code runs without file path errors.

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.791 1.657-2.791 3.556v1.674h3.314l-.52 3.667h-2.794v7.98h-5.023z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

const SpotifyIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.2-1.32 9.6-0.66 13.38 1.681.421.18.6.78.361 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 14.821 1.08.54.3.72 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const XLogoIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

// --- Embedded CSS Styles ---
const styles = `
  .ls-container {
    background-color: #030014; /* Deep dark background */
    color: white;
    padding: 4rem 1rem;
    overflow: hidden;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Header Section */
  .ls-header {
    text-align: center;
    margin-bottom: 4rem;
    max-width: 800px;
  }

  .ls-tag {
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 1px solid #2a2a4a;
    border-radius: 999px;
    font-size: 0.875rem;
    color: #a0a0c0;
    margin-bottom: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
  }

  .ls-title {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    background: linear-gradient(to bottom, #ffffff, #a5a5d5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ls-subtitle {
    color: #8888aa;
    font-size: 1.125rem;
  }

  /* Scroll Area Wrapper */
  .ls-scroll-wrapper {
    width: 100%;
    max-width: 1200px;
    position: relative;
    /* Fade masks on left and right */
    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  }

  /* Individual Row */
  .ls-row {
    display: flex;
    position: relative;
    margin-bottom: 2rem;
    overflow: hidden;
    /* Dashed line background */
  }

  /* The Dashed Line behind the row */
  .ls-row::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    border-top: 1px dashed #333355;
    z-index: 0;
  }

  /* The Moving Track */
  .ls-track {
    display: flex;
    gap: 2rem;
    width: max-content;
    z-index: 1; /* Above the dashed line */
  }

  /* Animation definitions */
  .ls-animate-left {
    animation: scrollLeft 30s linear infinite;
  }

  .ls-animate-right {
    animation: scrollRight 30s linear infinite;
  }

  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes scrollRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }

  /* Card Container */
  .ls-card {
    width: 80px;
    height: 80px;
    background-color: #0a0a1f; /* Dark card bg */
    border: 1px solid #1f1f3a;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    position: relative;
    transition: border-color 0.3s ease;
    color: white; /* Important for SVG fill */
  }

  .ls-card:hover {
    background: radial-gradient(123.159% 73.6111% at 50% 50%, rgba(72, 54, 140, 1) 0%, #9b62ff  68.0994%);  }
  
  /* Image Styles */
  .ls-card-img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    opacity: 0.7; /* Slightly dimmed by default */
    transition: opacity 0.3s ease;
  }

  .ls-card:hover .ls-card-img {
    opacity: 1; /* Full brightness on hover */
  }

`;

// Array of SVG components
const LogoComponents = [
  FacebookIcon, 
  GithubIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  SpotifyIcon, 
  XLogoIcon
];

// Helper component for a row
const ScrollingRow = ({ direction = 'left' }) => {
  // Duplicate the array to create a seamless loop
  const items = [...LogoComponents, ...LogoComponents, ...LogoComponents]; 

  return (
    <div className="ls-row">
      <div className={`ls-track ${direction === 'left' ? 'ls-animate-left' : 'ls-animate-right'}`}>
        {items.map((Logo, index) => (
          <div key={index} className="ls-card">
            <Logo className="ls-card-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function IconsScroll() {
  return (
    <>
      <style>{styles}</style>
      <div className="ls-container">
        
        {/* Text Section */}
        <div className="ls-header">
          <div className="ls-tag">Multi-Channel</div>
          <h2 className="ls-title">
            Multi-Channel:<br />
            Tens of thousand qualified data sources
          </h2>
          <p className="ls-subtitle">
            Your Competitive Intelligence Platform
          </p>
        </div>

        {/* Scroll Section */}
        <div className="ls-scroll-wrapper">
          {/* Row 1: Right to Left */}
          <ScrollingRow direction="left" />

          {/* Row 2: Left to Right */}
          <ScrollingRow direction="right" />

          {/* Row 3: Right to Left */}
          <ScrollingRow direction="left" />
        </div>

      </div>
    </>
  );
}