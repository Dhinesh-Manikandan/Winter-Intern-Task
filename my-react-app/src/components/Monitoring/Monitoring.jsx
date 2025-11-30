import React from 'react';
import './Monitoring.css';

const Monitoring = () => {
  const monitoringFeatures = [
    {
      title: 'Website Changes',
      description: 'Automatically detect and alert you to any changes on competitor websites.'
    },
    {
      title: 'Pricing Updates',
      description: 'Track pricing changes across competitor plans and packages in real-time.'
    },
    {
      title: 'Feature Launches',
      description: 'Get notified when competitors release new features or products.'
    },
    {
      title: 'Content Updates',
      description: 'Monitor blog posts, case studies, and marketing content changes.'
    }
  ];

  return (
    <section id="monitoring" className="monitoring">
      <div className="monitoring-container">
        <div className="monitoring-header">
          <h2 className="monitoring-title">
            Automated <span className="gradient-text">Competitive Monitoring</span>
          </h2>
          <p className="monitoring-subtitle">
            Set it and forget it. Our AI-powered monitoring tracks your competitors 24/7, 
            so you don't have to.
          </p>
        </div>

        <div className="monitoring-grid">
          {monitoringFeatures.map((feature, index) => (
            <div key={index} className="monitoring-card">
              <div className="monitoring-card-icon">
                <div className="icon-circle">{index + 1}</div>
              </div>
              <h3 className="monitoring-card-title">{feature.title}</h3>
              <p className="monitoring-card-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="monitoring-cta">
          <button className="btn-primary">See Monitoring in Action</button>
        </div>
      </div>
    </section>
  );
};

export default Monitoring;

