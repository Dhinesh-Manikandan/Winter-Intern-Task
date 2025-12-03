import React from 'react';
import './GlobeIcon.css';
// --- CONFIGURATION ---
// 1. If you have the local file, uncomment the import below:
import globeImg from '../../Images/globe.png';
import Logo from '../Header/Logo';
// 2. Placeholder for the globe image (Replace with your actual import)
// const globeImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/200px-Rotating_earth_%28large%29.gif"; 

export default function Footers() {
  return (
    <div className="footer-wrapper">

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