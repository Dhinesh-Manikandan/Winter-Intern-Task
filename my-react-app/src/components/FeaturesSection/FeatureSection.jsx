import React from 'react';
import './FeatureSection.css';

const features = [
  {
    id: 1,
    title: "Competitor Pricing",
    description: "Uncover competitor's pricing and packaging strategies for informed decision-making",
    paths: [
      "M16.154 7.154c-.949-.949-2.619-1.608-4.154-1.65m-4.154 10.65c.893 1.19 2.552 1.868 4.154 1.926m0-12.576c-1.826-.049-3.461.778-3.461 3.034 0 4.154 7.615 2.077 7.615 6.231 0 2.37-2.027 3.387-4.154 3.31m0-12.575V3m0 15.08V21"
    ]
  },
  {
    id: 2,
    title: "Website Monitoring",
    description: "Receive an alert when a competitor makes a website change",
    paths: [
      "M2 19V9a2 2 0 012-2h.5a2 2 0 001.6-.8l2.22-2.96A.6.6 0 018.8 3h6.4a.6.6 0 01.48.24L17.9 6.2a2 2 0 001.6.8h.5a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z",
      "M12 17a4 4 0 100-8 4 4 0 000 8z"
    ]
  },
  {
    id: 3,
    title: "Multi-Channel Monitoring",
    description: "Stay ahead with real-time tracking of competitor news, A/B tests, and updates",
    paths: [
      "M6 3H3v3M18 3h3v3M6 21H3v-3M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1M12 12a3 3 0 100-6 3 3 0 000 6zM18 21h3v-3"
    ]
  },
  {
    id: 4,
    title: "AI Battle Cards",
    description: "Boost Sales team performance and win rates with AI-powered insights",
    paths: [
      "M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1012 0 6 6 0 00-12 0z"
    ]
  },
  {
    id: 5,
    title: "Win-loss & churn interviews",
    description: "Delegate interviews to identify why you lost a customer and to who",
    paths: [
      "M12 4v4M4 8l2.5 2.5M17.5 10.5L20 8M3 17h3M12 17l1-6M18 17h3M8.5 20.001H4A9.956 9.956 0 012 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20",
      "M12 23a3 3 0 100-6 3 3 0 000 6z"
    ]
  },
  {
    id: 6,
    title: "Feature Monitoring",
    description: "Know what features your competitors are introducing",
    paths: [
      "M18 8.4c0-1.697-.632-3.325-1.757-4.525C15.117 2.675 13.59 2 12 2c-1.591 0-3.117.674-4.243 1.875C6.632 5.075 6 6.703 6 8.4 6 15.867 3 18 3 18h18s-3-2.133-3-9.6zM13.73 21a1.999 1.999 0 01-3.46 0"
    ]
  }
];

const AnimatedIcon = ({ paths }) => {
  return (
    <div className="fs-icon-container">
      <div className="fs-icon-track">
        {/* Icon 1 (Visible initially) */}
        <div className="fs-icon">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {paths.map((d, i) => <path key={i} d={d} />)}
          </svg>
        </div>

        {/* Icon 2 (Visible on Hover - slides up) */}
        <div className="fs-icon">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {paths.map((d, i) => <path key={i} d={d} />)}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <>
      <div className="fs-container">
        <div className="fs-grid">
          {features.map((feature) => (
            <div key={feature.id} className="fs-card">
              {/* Icon Wrapper */}
              <AnimatedIcon paths={feature.paths} />

              {/* Text Content */}
              <div className="fs-content">
                <h3 className="fs-title">
                  {feature.title}
                </h3>
                <p className="fs-description">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}