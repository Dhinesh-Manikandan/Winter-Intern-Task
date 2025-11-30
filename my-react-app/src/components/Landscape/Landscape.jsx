import React from 'react';
import './Landscape.css';

const Landscape = () => {
  const landscapeFeatures = [
    {
      title: 'Market Mapping',
      description: 'Visualize your competitive landscape and understand market positioning.'
    },
    {
      title: 'Gap Analysis',
      description: 'Identify gaps in competitor offerings that represent opportunities.'
    },
    {
      title: 'Trend Analysis',
      description: 'Spot emerging trends before they become mainstream in your industry.'
    }
  ];

  return (
    <section id="landscape" className="landscape">
      <div className="landscape-container">
        <div className="landscape-content">
          <div className="landscape-text">
            <h2 className="landscape-title">
              Understand Your <span className="gradient-text">Competitive Landscape</span>
            </h2>
            <p className="landscape-description">
              Get a comprehensive view of your market position and competitive dynamics. 
              Make data-driven decisions with confidence.
            </p>
            
            <div className="landscape-features">
              {landscapeFeatures.map((feature, index) => (
                <div key={index} className="landscape-feature-item">
                  <div className="landscape-feature-icon">✓</div>
                  <div>
                    <h4 className="landscape-feature-title">{feature.title}</h4>
                    <p className="landscape-feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="landscape-visual">
            <div className="landscape-card">
              <div className="landscape-card-header">
                <div className="landscape-card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="landscape-card-content">
                <div className="visual-element element-1"></div>
                <div className="visual-element element-2"></div>
                <div className="visual-element element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landscape;

