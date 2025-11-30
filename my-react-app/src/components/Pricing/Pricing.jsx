import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Blitz-scale Barry',
      price: '€360',
      period: '/mo',
      description: 'For scale-ups',
      savings: 'save up to €96k annually on a Competitive Intel department',
      features: [
        'Monitor your competitors',
        'Dedicated teammate',
        'Win-loss and churn interviews'
      ],
      popular: false
    },
    {
      name: 'Vanguard Vivan',
      price: '€600',
      period: '/mo',
      description: 'For scale-ups and SMEs',
      savings: 'save up to €228k annually on a Competitive Intel department',
      features: [
        'Monitor your competitors',
        'Dedicated teammate',
        'Win-loss and churn interviews'
      ],
      popular: true
    },
    {
      name: 'Enterprise Eva',
      price: '€2,550',
      period: '/mo',
      description: 'For SMEs, starting at',
      savings: 'save up to €336k annually on a Competitive Intel department',
      features: [
        'Monitor your competitors',
        'Dedicated teammate',
        'Win-loss and churn interviews'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            We value <span className="gradient-text">transparent pricing</span> too
          </h2>
          <p className="pricing-subtitle">
            Simple Pricing for Your Convenience<br />
            All plans include a 14-day free trial
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">✨</div>}
              
              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">{plan.name}</h3>
                <p className="pricing-description">{plan.description}</p>
                <div className="pricing-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
                <p className="pricing-savings">{plan.savings}</p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="pricing-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`pricing-button ${plan.popular ? 'btn-primary' : 'btn-pricing-secondary'}`}>
                {plan.name === 'Enterprise Eva' ? 'Contact Sales' : 'Get 14-Day Free Trial'}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <a href="#" className="pricing-footer-link">More details and all features</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

