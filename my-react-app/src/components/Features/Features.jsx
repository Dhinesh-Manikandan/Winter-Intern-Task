import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Automated Monitoring',
      description: 'Track competitor pricing, features, and positioning automatically without manual research.'
    },
    {
      icon: '📊',
      title: 'Market Intelligence',
      description: 'Get insights into market trends, customer sentiment, and competitive positioning.'
    },
    {
      icon: '🚀',
      title: 'Win More Deals',
      description: 'Equip your sales team with competitive intelligence to close deals faster.'
    },
    {
      icon: '🔍',
      title: 'Real-time Alerts',
      description: 'Get notified instantly when competitors make changes to their offerings.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Made specifically for <span className="gradient-text">B2B SaaS teams.</span>
          </h2>
          <p className="features-subtitle">
            Avoid one-size-fits-all solutions. We are your tailored B2B SaaS framework for analyzing competition.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

