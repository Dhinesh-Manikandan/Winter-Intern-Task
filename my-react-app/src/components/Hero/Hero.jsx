import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="sync-cycles-circles">
        {Array.from({ length: 14 }).map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-whats-new-container">
          <div className="hero-whats-new">
            <div className="whats-new-badge-container">
              <div className="whats-new-badge">
                <div className="badge-label">
                  <p className="badge-text">Feature highlight</p>
                </div>
              </div>
            </div>
            <a href="./" className="whats-new-link" tabIndex={0}>
              <div className="link-label">
                <p className="link-text">Competitor monitoring</p>
              </div>
              <div className="link-icon">
                <svg 
                  width="100%" 
                  height="1.5em" 
                  strokeWidth="1.5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: '100%', height: '100%' }}
                >
                  <path 
                    d="M6 12h12.5m0 0l-6-6m6 6l-6 6" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
        
        <div className="hero-title-container">
          <h1 className="hero-title">
            Monitor your competitors,<br />
            win more deals.
          </h1>
        </div>
        
        <div className="hero-description-container">
          <p className="hero-subtitle">
            Automated Competitive and Market Intelligence<br />
            for B2B SaaS Marketing & Sales
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

