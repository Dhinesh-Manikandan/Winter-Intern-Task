import React, { useState } from 'react';
import './Pricing.css';
import { useNavigate } from 'react-router-dom';


export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annually'
  const navigate = useNavigate();
  // Pricing Data based on your screenshots
  const plans = [
    {
      id: 1,
      name: "Blitz-scale Barry",
      target: "For scale-ups",
      price: { monthly: "€360", annually: "€299" },
      savings: "save up to €96k annually on a Competitive Intel department",
      buttonText: "Get 14-Day Free Trial",
      isPopular: false,
      features: [
        { name: "Monitor your competitors", included: true },
        { name: "Dedicated teammate", included: false },
        { name: "Win-loss and churn interviews", included: false },
      ]
    },
    {
      id: 2,
      name: "Vanguard Vivan",
      target: "For scale-ups and SMEs",
      price: { monthly: "€600", annually: "€499" },
      savings: "save up to €228k annually on a Competitive Intel department",
      buttonText: "Get 14-Day Free Trial",
      isPopular: true,
      features: [
        { name: "Monitor your competitors", included: true },
        { name: "Dedicated teammate", included: true },
        { name: "Win-loss and churn interviews", included: false },
      ]
    },
    {
      id: 3,
      name: "Enterprise Eva",
      target: "For SMEs, starting at",
      price: { monthly: "€2,550", annually: "€2,000" },
      savings: "save up to €336k annually on a Competitive Intel department",
      buttonText: "Contact Sales",
      isPopular: false,
      features: [
        { name: "Monitor your competitors", included: true },
        { name: "Dedicated teammate", included: true },
        { name: "Win-loss and churn interviews", included: true },
      ]
    }
  ];

  return (
    <div className="pr-container">
      
      {/* Header */}
      <div className="pr-header">
        <div className="pr-tag">Pricing</div>
        <h2 className="pr-title">
          We value transparent pricing too
        </h2>
        <p className="pr-subtitle">
          Simple Pricing for Your Convenience
        </p>
      </div>

      {/* Toggle */}
      <div className="pr-toggle-container">
        <button 
          className={`pr-toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </button>
        <button 
          className={`pr-toggle-btn ${billingCycle === 'annually' ? 'active' : ''}`}
          onClick={() => setBillingCycle('annually')}
        >
          Annually
        </button>
        <span className="pr-discount-badge">-2 MONTHS</span>
      </div>

      {/* Cards Grid */}
      <div className="pr-grid">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`pr-card ${plan.isPopular ? 'highlighted' : ''}`}
          >
            {/* Card Header */}
            <div className="pr-card-header">
              <div className="pr-plan-name-row">
                <h3 className="pr-plan-name">{plan.name}</h3>
                {plan.isPopular && <span className="pr-popular-badge">Most Popular</span>}
              </div>
              <p className="pr-plan-desc">{plan.target}</p>
            </div>

            {/* Price */}
            <div className="pr-price-area">
              <span className="pr-currency">
                {billingCycle === 'annually' ? plan.price.annually : plan.price.monthly}
              </span>
              <span className="pr-period">
                /mo <br />
                {billingCycle === 'annually' ? 'billed annually' : 'billed monthly'}
              </span>
            </div>

            <p className="pr-savings">
              {plan.savings}
            </p>

            {/* Button */}
            <button className={`pr-btn ${plan.isPopular ? 'pr-btn-filled' : 'pr-btn-outline'}`}>
              {plan.buttonText} 
              <span>→</span>
            </button>

            {/* Features */}
            <div className="pr-features">
              <p className="pr-features-title">What’s included;</p>
              <ul className="pr-feature-list">
                {plan.features.map((feature, idx) => (
                  <li 
                    key={idx} 
                    className={`pr-feature-item ${feature.included ? 'pr-item-included' : 'pr-item-excluded'}`}
                  >
                    {/* SVG Icon Logic */}
                    {feature.included ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="#555577" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="text-center mt-8">
        <p className="end">More details and all features</p>
        <button className="pr-footer-link" onClick={() => navigate('/pricing')}>
          View Pricing Page <span>→</span>
        </button>
      </div>

    </div>
  );
}