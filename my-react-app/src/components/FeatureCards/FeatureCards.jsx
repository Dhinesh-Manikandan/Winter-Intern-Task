import React from 'react';
import './FeatureCards.css';

const FeatureCards = () => {
  const detailedFeatures = [
    {
      title: 'Competitor Tracking',
      description: 'Monitor competitor websites, pricing pages, feature announcements, and more automatically.',
      benefits: ['Daily website monitoring', 'Price change alerts', 'Feature update tracking', 'Content change detection']
    },
    {
      title: 'Market Research',
      description: 'Access comprehensive market data and trends to inform your product and marketing strategy.',
      benefits: ['Market size analysis', 'Customer sentiment tracking', 'Industry trend reports', 'Competitive positioning']
    },
    {
      title: 'Sales Enablement',
      description: 'Give your sales team the competitive intelligence they need to win deals.',
      benefits: ['Battle cards', 'Talking points', 'Win/loss analysis', 'Competitive playbooks']
    }
  ];

  return (
    <section className="feature-cards">
      <div className="feature-cards-container">
        {detailedFeatures.map((feature, index) => (
          <div key={index} className="detailed-feature-card">
            <div className="feature-card-header">
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
            </div>
            <ul className="feature-benefits">
              {feature.benefits.map((benefit, idx) => (
                <li key={idx} className="benefit-item">
                  <span className="checkmark">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;

