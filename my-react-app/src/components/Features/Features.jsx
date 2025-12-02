import React from "react";
import "./Features.css";
import LogosMarquee from "../LogosMarquee/LogosMarquee";

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Automated Monitoring",
      description: "Track competitor pricing, features, and positioning automatically.",
    },
    {
      icon: "📊",
      title: "Market Intelligence",
      description: "Get insights into market trends, customer sentiment, and competitive positioning.",
    },
    {
      icon: "🚀",
      title: "Win More Deals",
      description: "Equip your sales team with competitive intelligence to close deals faster.",
    },
    {
      icon: "🔍",
      title: "Real-time Alerts",
      description: "Get notified instantly when competitors make changes to their offerings.",
    },
  ];

  return (
    <section className="features-section">
      <div className="glow glow-left"></div>
      <div className="glow glow-right"></div>

      <div className="features-container">
        <div className="features-header">
          <h2>
            Made specifically for{" "}
            <span className="gradient-text">B2B SaaS teams.</span>
          </h2>
          <p>
            Avoid one-size-fits-all solutions. We are your tailored B2B SaaS
            framework for analyzing competition.
          </p>
        </div>

        <div className="features-grid">
          {/* FIRST CARD */}
          <div className="feature-card marquee-card">
            <LogosMarquee />
            <div className="card-content-wrapper">
              <h3>Multi-Channel</h3>
              <p>Data is sourced from quality data sources, ensuring accurate insights.</p>
            </div>
            <div className="hover-border"></div>
          </div>

          {/* SECOND CARD: FRACTIONAL TEAMMATE (Target Animation) */}
          <div className="feature-card teammate-card">
            <div className="teammate-visual">
              {/* Radar Rings */}
              <div className="radar-ring ring-1"></div>
              <div className="radar-ring ring-2"></div>
              <div className="radar-ring ring-3"></div>
              <div className="radar-ring ring-4"></div>
              {/* <div className="radar-ring ring-5"></div> */}

              {/* Center Large Square Logo */}
              <div className="center-logo">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sparkle-icon"
                >
                  <path
                    d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Floating Tags */}
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
              <p>
                We support your team with ad-hoc and in-depth competitor
                research and analysis.
              </p>
            </div>
            <div className="hover-border"></div>
          </div>

          {/* THIRD CARD */}
          <div className="feature-card monitoring-card">
            <div className="monitoring-visual">
                <button className="scan-btn">
                    Run Scan <span className="wifi-symbol">((•))</span>
                </button>
            </div>
            <div className="card-content-wrapper">
              <h3>Automated Competitor Monitoring</h3>
              <p>Insights go stale very quickly. Thats why Uncovered automates it for you.</p>
            </div>
            <div className="hover-border"></div>
          </div>

          {/* OTHER CARDS */}
          {features.map((f, i) => (
            <div className="feature-card small-card" key={i}>
              <div className="icon-box">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
              <div className="hover-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;