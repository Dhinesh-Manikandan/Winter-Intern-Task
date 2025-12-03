import React from 'react';

// --- CONFIGURATION ---
// 1. If you have the local file, uncomment the import below:
import globeImg from '../../Images/globe.png';
import Logo from '../Header/Logo';
// 2. Placeholder for the globe image (Replace with your actual import)
// const globeImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/200px-Rotating_earth_%28large%29.gif"; 

const styles = `
/* --- Main Container --- */
.footer-wrapper {
  background-color: #030014;
  color: white;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 800px; /* Ensure height for the background */
}

/* --- Globe Background Layer --- */
.globe-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.globe-img-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  /* Pulls the globe up so only the top half is visible */
  margin-top: -250px; 
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* RENAME your <img className="globe-img" /> to <div className="globe-sphere"></div> */
.globe-sphere {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  
  /* 1. FLATTENED WORLD MAP TEXTURE (Required for 3D effect) */
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png');
  background-size: 200% 100%; /* Double width for seamless looping */
  background-repeat: repeat-x;

  /* 2. INSET SHADOW (Creates the 3D Sphere look) */
  box-shadow: inset 20px 0 80px 6px rgba(0,0,0,1);

  /* 3. Color Filter to match your purple theme */
  filter: invert(15%) sepia(100%) saturate(400%) hue-rotate(230deg) brightness(1.2) contrast(1.2);
  opacity: 0.6;

  /* 4. Sliding Animation (Real rotation look) */
  animation: spin-slow 30s linear infinite;
}

/* Mask to hide the bottom half (The "Horizon" cut) */
.globe-mask {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  z-index: 1;
  /* Sharp fade at the equator to hide bottom half */
  background: linear-gradient(180deg, 
    transparent 0%, 
    transparent 40%, 
    #030014 60%, 
    #030014 100%
  );
}

.globe-bottom-fade {
  display: none; /* Not needed with the new mask */
}

.globe-img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  animation: globe-rotate 25s linear infinite;
  transform-origin: center;
}

/* Right to left rotation (counter-clockwise) */
@keyframes globe-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}


/* --- Content Wrapper --- */
.footer-content {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 3rem 2rem;
  display: flex;
  flex-direction: column;
}

/* --- CTA Section (The "Horizon" Content) --- */
.footer-cta {
  text-align: center;
  /* Pushing the text down to sit on the "equator" of the globe */
  margin-top: 280px; 
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
  /* Subtle gradient on text for premium feel */
  background: linear-gradient(to bottom, #ffffff 0%, #d1d5db 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.cta-subtitle {
  color: #a0a0c0;
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
  font-weight: 400;
}

.cta-btn {
  background: linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.3); /* Purple glow */
  font-size:16px;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(124, 58, 237, 0.5);
}

/* --- Separator Line with Plus Icon --- */
.footer-separator {
  position: relative;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #2a2a4a 50%, transparent 100%);
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.separator-icon {
  background-color: #030014;
  border: 1px solid #2a2a4a;
  color: #8888aa;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  z-index: 5;
  padding-bottom: 2px;
}

/* --- Links Section --- */
.footer-links-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .footer-links-row {
    grid-template-columns: 2fr 1fr 1fr 1fr; 
  }
}

/* Logo Column */
.footer-brand-col {
  max-width: 380px;
}

.brand-logo-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.brand-icon {
  width: 28px; 
  height: 28px;
  color: #a0a0c0;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.brand-desc {
  color: #8888aa;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.brand-badge {
  font-size: 0.75rem;
  color: #8888aa;
  border: 1px solid #2a2a4a;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.brand-link {
  color: white;
  font-size: 0.95rem;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

}
.brand-link:hover{
  color:#a78bfa ;
}

/* Link Columns */
.footer-col-title {
  color: #8888aa;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
}

.footer-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.footer-nav-link {
  color: #e2e2e2;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 400;
}

.footer-nav-link:hover {
  color: #a78bfa;
}

.footer-address {
  color: #8888aa;
  font-size: 0.9rem;
  line-height: 1.6;
  font-style: normal;
}

/* --- Bottom Copyright Bar --- */
.footer-bottom {
  margin-top: 5rem;
  border-top: 1px solid #1f1f3a;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.85rem;
  color: #555577;
  align-items: center;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}
  @media (max-width: 768px) {
  .cta-title {
    font-size: 34px;
  }
}

`;

export default function Footers() {
  return (
    <div className="footer-wrapper">
      <style>{styles}</style>

      {/* --- Globe Background Layer --- */}
      <div className="globe-layer">
        <div className="globe-img-container">
          <img 
            src={globeImg} 
            alt="Rolling Globe" 
            className="globe-img" 
          />
          {/* This mask cuts off the bottom half */}
          <div className="globe-mask"></div>
        </div>
      </div>

      <div className="footer-content">
        
        {/* --- 14-Day Trial CTA Section --- */}
        {/* Adjusted margin-top in CSS to sit on the "horizon" */}
        <div className="footer-cta">
          <h2 className="cta-title">
            14-day trial • No onboarding fees
          </h2>
          <p className="cta-subtitle">
            Your Competitive Intelligence Platform for B2B SaaS
          </p>
          <button className="cta-btn">
            Get Uncovered
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* --- Separator Line --- */}
        <div className="footer-separator">
          <div className="separator-icon">+</div>
        </div>

        {/* --- Footer Links Section --- */}
        <div className="footer-links-row">
          
          {/* Brand / Logo Column */}
          <div className="footer-brand-col">
            <div className="brand-logo-row">
               <Logo/>
              </div>
            
            <p className="brand-desc">
              Uncovered automates Competitive Intelligence for B2B SaaS marketing, product, and sales teams. Monitor your competitors pricing, positioning, feature changes, A/B tests, and more.
            </p>
            
            <span className="brand-badge">Made in Europe 🇪🇺</span>
            <br />
            <a href="#" className="brand-link">
              Get Uncovered 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="footer-col-title">Platform</h3>
            <ul className="footer-nav-list">
              <li><a href="#" className="footer-nav-link">Product</a></li>
              <li><a href="#" className="footer-nav-link">Win-Loss and Churn</a></li>
              <li><a href="#" className="footer-nav-link">Blog</a></li>
              <li><a href="#" className="footer-nav-link">Pricing</a></li>
              <li><a href="#" className="footer-nav-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-nav-list">
              <li><a href="#" className="footer-nav-link">About Us</a></li>
              <li><a href="#" className="footer-nav-link">Careers</a></li>
              <li><a href="#" className="footer-nav-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-nav-link">Terms of Service</a></li>
            </ul>
          </div>

          {/* Offices Column */}
          <div>
            <h3 className="footer-col-title">Offices</h3>
            <ul className="footer-nav-list">
              <li className="footer-address">
                <strong style={{color: 'white'}}>Vilnius</strong><br/>
                Gynėjų g. 4-333,<br/>
                LT-01109, Lithuania
              </li>
              <li className="footer-address" style={{marginTop: '1rem'}}>
                <strong style={{color: 'white'}}>Vienna</strong><br/>
                1020, Vienna<br/>
                Austria
              </li>
            </ul>
          </div>

        </div>

        {/* --- Bottom Copyright --- */}
        <div className="footer-bottom">
          <span>Uncovered Intelligence UAB. All rights reserved. © 2025</span>
          <a href="#" style={{ color: '#555577' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}