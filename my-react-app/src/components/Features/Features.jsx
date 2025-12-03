import React, { useState } from "react";
import "./Features.css";
import LogosMarquee from "../LogosMarquee/LogosMarquee";

const Features = () => {
  const [scanState, setScanState] = useState("idle"); 
  // New State for Card 5
  const [battleTab, setBattleTab] = useState("strengths"); // 'strengths' | 'weaknesses'

  // --- DATA: SCANNING LIST ---
  const scanItems = [
    "Scan Competitor News", "Scan Competitor Social Channels", "Scan Competitor Pricing",
    "Scan Competitor Features", "Scan Competitor Messaging", "Scan Competitor Hiring",
    "Scan Competitor A/B Tests", "Scan Competitor Website Performance", "Scan for New Competitors",
    "Scan for Partnerships", "Scan for Interviews", "Analyse Competitor Content Strategy",
    "Analyse Competitor Customer Reviews", "Analyse Competitor SEO Strategies",
    "Analyse Competitor Paid Advertising", "Analyse Competitor Blog Posts",
    "Monitor Competitor Patents", "Monitor Competitor Web Traffic",
    "Monitor Mobile App Performance", "Monitor Web App Performance",
    "Track Competitor Market Share", "Track Competitor Industry Awards"
  ];

  // --- DATA: BATTLE CARD CONTENT ---
  const battleContent = {
    weaknesses: {
      title: "Competitor Weaknesses", // When viewing our strengths, we usually look at competitor weaknesses
      headerIconColor: "#8b5cf6",
      descTitle: "Why we win:",
      desc: "We ensure same-day turnaround with our streamlined sales process and offer a 'try before you buy' demo. Unlike competitors with lengthy sales cycles, we prioritize efficiency, real-time analytics, and client satisfaction.",
      items: ["Product", "Pricing and Packaging", "Product Features", "Go to Market", "HR and Talent Insights", "Social Reach"]
    },
    strengths: {
      title: "Competitor Strengths",
      headerIconColor: "#ef4444",
      descTitle: "Objection Handling:",
      desc: "Competitor A has a strong legacy presence. Counter this by highlighting their slow deployment times and hidden support fees compared to our transparent pricing model.",
      items: ["Brand Recognition", "Enterprise Integrations", "Legacy Database", "Global Support", "Custom API", "On-premise Options"]
    }
  };

  const handleScan = () => {
    setScanState("scanning");
    setTimeout(() => {
      setScanState("complete");
    }, 2500);
  };

  const handleReset = () => {
    setScanState("idle");
  };

  return (
    <section className="features-section">
      <div className="glow glow-left"></div>
      <div className="glow glow-right"></div>

      <div className="features-container">
        <div className="features-header">
          <h2>
            Made specifically <br></br>for B2B SaaS teams.{" "}
            {/* <span className="gradient-text">for B2B SaaS teams.</span> */}
          </h2>
          <div class="text">
          <p>
            Avoid one-size-fits-all solutions.
            <br></br>We are your tailored B2B SaaS
            framework for analyzing competition.
          </p>
          </div>
        </div>

        <div className="features-grid">
          {/* --- CARD 1: MULTI-CHANNEL --- */}
          <div className="feature-card marquee-card">
            <LogosMarquee />
            <div className="card-content-wrapper">
              <h3>Multi-Channel</h3>
              <p>Data is sourced from quality data sources, ensuring accurate insights.</p>
            </div>
            <div className="hover-border"></div>
          </div>

          {/* --- CARD 2: FRACTIONAL TEAMMATE --- */}
          <div className="feature-card teammate-card">
            <div className="teammate-visual">
              <div className="radar-ring ring-1"></div>
              <div className="radar-ring ring-2"></div>
              <div className="radar-ring ring-3"></div>
              <div className="center-logo">
                <svg viewBox="0 0 24 24" fill="none" className="sparkle-icon">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
                </svg>
              </div>
              <div className="team-tag your-team">
                <span>Your team</span>
                <div className="tag-arrow arrow-orange"></div>
              </div>
              <div className="team-tag uncovered">
                <span>Uncovered</span>
                <div className="tag-arrow arrow-purple"></div>
              </div>
            </div>
            <div className="card-content-wrapper">
              <h3>Fractional Teammate</h3>
              <p>We support your team with ad-hoc and in-depth competitor research and analysis.</p>
            </div>
            <div className="hover-border"></div>
          </div>

          {/* --- CARD 3: AUTOMATED MONITORING --- */}
          <div className="feature-card monitoring-card">
            <div className="monitoring-visual">
              {scanState !== "complete" && (
                <div className={`scan-window ${scanState === "scanning" ? "active" : "paused"}`}>
                  <div className="scan-overlay-gradient"></div>
                  <div className="scan-content">
                    {scanItems.concat(scanItems).map((item, index) => (
                      <div className="scan-row" key={index}>
                        <span className="scan-num">{(index + 1).toString().padStart(2, '0')}</span>
                        <span className="scan-text">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {scanState === "idle" && (
                <div className="scan-idle-overlay">
                  <button className="scan-btn" onClick={handleScan}>
                    Run Scan <span className="wifi-symbol">((•))</span>
                  </button>
                </div>
              )}
              {scanState === "complete" && (
                <div className="scan-result" onClick={handleReset}>
                  <div className="result-circle">
                    <span className="result-count">27</span>
                  </div>
                  <div className="result-text">
                    <h4>Notifications Found</h4>
                    <p>Click to view updates</p>
                  </div>
                </div>
              )}
            </div>
            <div className="card-content-wrapper">
              <h3>Automated Competitor Monitoring</h3>
              <p>Insights go stale very quickly. That's why Uncovered automates it for you.</p>
            </div>
            <div className="hover-border"></div>
          </div>

          {/* --- CARD 4: COMPETITIVE LANDSCAPE --- */}
          <div className="feature-card landscape-card">
            <div className="landscape-visual">
              <div className="landscape-badges">
                <div className="badge"><span className="dot purple"></span> Competitor A</div>
                <div className="badge"><span className="dot grey"></span> Competitor B</div>
              </div>
              <div className="graph-scroll-container">
                <div className="graph-track">
                   <img src="https://framerusercontent.com/images/sX5G8LVLYiwXoHrQsx3khNCfRFA.svg" className="graph-img" alt="Graph" />
                   <img src="https://framerusercontent.com/images/sX5G8LVLYiwXoHrQsx3khNCfRFA.svg" className="graph-img" alt="Graph" />
                </div>
              </div>
              <div className="stat-popup revenue-popup">
                <div className="stat-icon-box">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                </div>
                <div className="stat-info"><span className="stat-value">184%</span><span className="stat-label">Revenue</span></div>
              </div>
              <div className="stat-popup growth-popup">
                <div className="stat-icon-box">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                </div>
                <div className="stat-info"><span className="stat-value">147%</span><span className="stat-label">Growth</span></div>
              </div>
            </div>
            <div className="card-content-wrapper">
              <h3>Your Competitive Landscape</h3>
              <p>Track your competitor's performance. Identify areas to improve, and monitor progress.</p>
            </div>
            <div className="hover-border"></div>
          </div>
          
          {/* --- CARD 5: BATTLE CARDS (UPDATED) --- */}
          <div className="feature-card battle-card">
             <div className="battle-visual">
                {/* Left Side: Controls & Text */}
                <div className="battle-left">
                   <div className="battle-label">Battle Cards</div>
                   <div className="battle-tabs">
                      <button 
                        className={battleTab === 'strengths' ? 'active' : ''} 
                        onClick={() => setBattleTab('strengths')}
                      >
                        Strengths
                      </button>
                      <button 
                        className={battleTab === 'weaknesses' ? 'active' : ''} 
                        onClick={() => setBattleTab('weaknesses')}
                      >
                        Weaknesses
                      </button>
                   </div>
                   <div className="battle-description">
                      <strong>{battleContent[battleTab].descTitle}</strong>
                      <p>{battleContent[battleTab].desc}</p>
                   </div>
                </div>

                {/* Right Side: Mini Browser Window */}
                <div className="battle-right">
                   {/* Dynamic Class for Dark/Light Mode */}
                   <div className={`mini-browser ${battleTab === 'weaknesses' ? 'light-mode' : 'dark-mode'}`}>
                      <div className="browser-header">
                         <div className="browser-icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" stroke="none"/></svg>
                         </div>
                         <span>{battleContent[battleTab].title}</span>
                         {/* <div className="browser-search">
                            Type and search <span className="search-icon">🔍</span>
                         </div> */}
                      </div>
                      
                      <div className="browser-body">
                         <div className="browser-meta">48 items</div>
                         {/* Dynamic List Items */}
                         {battleContent[battleTab].items.map((item, i) => (
                           <div className="browser-row" key={i}>
                              <div className="row-dots">
                                <svg width="8" height="8" viewBox="0 0 9 13" fill="currentColor"><path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm4-8h2v2H5V1zm0 4h2v2H5V5zm0 4h2v2H5V9z"/></svg>
                                <span>{(i + 1).toString().padStart(2, '0')}</span>
                              </div>
                              <span className="row-text">{item}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>

             <div className="card-content-wrapper">
              <div class="last">
               <h3>Highlight how you win to your customers</h3>
               <p>Empower Sales and Marketing teams to win more deals with proven strategies.</p>
               </div>
             </div>
             <div className="hover-border"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;