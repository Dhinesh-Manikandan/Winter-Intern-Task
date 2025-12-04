import React from 'react';
import './AboutUs.css';
import LogosScroll from '../LogosScroll/LogosScroll';

const AboutUs = () => {
  return (
    <div className="about-page">
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

      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1>About Us</h1>
          <p className="subtitle">Competitive Intelligence. Actually Current.</p>
        </div>

        {/* Main Content Grid */}
        <div className="values-section">
          
          {/* Left Column: Core Values Text */}
          <div className="values-intro">
            <div className="pill-badge">What to expect</div>
            <h2>Our Core Values</h2>
            <div className="values-list">
              <p>We believe in current.</p>
              <p>We commit to depth.</p>
              <p>We deliver clarity.</p>
            </div>
          </div>

          {/* Right Column: Feature Grid */}
          <div className="features-grid">
            
            {/* Grid Item 1 */}
            <div className="grid-item">
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <h3>Your Teammate</h3>
              <p>More than support. Your intelligence team.</p>
            </div>

            {/* Grid Item 2 */}
            <div className="grid-item">
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle><circle cx="5" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="5" r="1"></circle><circle cx="19" cy="5" r="1"></circle><circle cx="5" cy="19" r="1"></circle><circle cx="19" cy="19" r="1"></circle></svg>
              </div>
              <h3>Quality over quantity</h3>
              <p>Depth, not breadth. Focused intelligence that matters.</p>
            </div>

            {/* Grid Item 3 */}
            <div className="grid-item">
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              </div>
              <h3>Drive Environmental Impact</h3>
              <p>One competitor tracked = One tree planted.</p>
            </div>

            {/* Grid Item 4 */}
            {/* <div className="grid-item">
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3>Work with amazing people</h3>
              <p>Life is short, surround yourself with genuine people.</p>
            </div> */}

          </div>
        </div>

        {/* Footer / Trusted By Section */}
        <div className="trusted-section">
          <h4>Trusted by</h4>
            <LogosScroll/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;