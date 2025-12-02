import React, { useState } from 'react';

// Embedding CSS to prevent import resolution errors
const styles = `
/* Main Container */
.pr-container {
  background-color: #030014;
  color: white;
  padding: 4rem 1rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* Header Section */
.pr-header {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
}

.pr-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid #2a2a4a;
  border-radius: 999px;
  font-size: 0.875rem;
  color: #a0a0c0;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
}

.pr-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: white;
}

.pr-subtitle {
  color: #8888aa;
  font-size: 1.125rem;
}

/* Toggle Switch Container */
.pr-toggle-container {
  display: flex;
  align-items: center;
  background-color: #0a0a1f;
  border: 1px solid #1f1f3a;
  padding: 0.25rem;
  border-radius: 999px;
  margin-bottom: 4rem;
  position: relative;
}

.pr-toggle-btn {
  background: transparent;
  border: none;
  color: #8888aa;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.pr-toggle-btn.active {
  background-color: #1f1f3a;
  color: white;
}

.pr-discount-badge {
  background-color: #7c3aed; /* Purple */
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  margin-left: 0.5rem;
  text-transform: uppercase;
}

/* Cards Grid */
.pr-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
}

@media (min-width: 1024px) {
  .pr-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Individual Card */
.pr-card {
  background-color: #0a0a1f;
  border: 1px solid #1f1f3a;
  border-radius: 24px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: border-color 0.3s ease;
}

.pr-card:hover {
  border-color: #4a4a6a;
}

/* Highlight for the middle/popular card */
.pr-card.highlighted {
  background-color: #0d0d25;
  border-color: #2d2d55;
}

/* Card Header content */
.pr-card-header {
  margin-bottom: 2rem;
}

.pr-plan-name-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.pr-plan-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.pr-popular-badge {
  font-size: 0.75rem;
  border: 1px solid #4a4a6a;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  color: #c4c4e0;
}

.pr-plan-desc {
  color: #8888aa;
  font-size: 0.95rem;
  margin: 0;
}

/* Price Section */
.pr-price-area {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.pr-currency {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
}

.pr-period {
  color: #8888aa;
  font-size: 0.9rem;
}

.pr-savings {
  color: white;
  font-size: 0.85rem;
  margin-bottom: 2rem;
  line-height: 1.4;
}

/* Buttons */
.pr-btn {
  width: 100%;
  padding: 1rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2.5rem;
  transition: all 0.2s ease;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

/* Outline Button Style */
.pr-btn-outline {
  background: transparent;
  border: 1px solid #2a2a4a;
  color: white;
}

.pr-btn-outline:hover {
  border-color: #4a4a6a;
  background-color: rgba(255, 255, 255, 0.05);
}

/* Filled Button Style (Purple) */
.pr-btn-filled {
  background: linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%);
  border: none;
  color: white;
}

.pr-btn-filled:hover {
  opacity: 0.9;
}

/* Features List */
.pr-features {
  border-top: 1px solid #1f1f3a;
  padding-top: 2rem;
}

.pr-features-title {
  color: #8888aa;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.pr-feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pr-feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

/* Included Item (White text, check icon) */
.pr-item-included {
  color: white;
}

/* Excluded/Dimmed Item (Grey text, dash icon) */
.pr-item-excluded {
  color: #555577;
}

/* Bottom Link */
.pr-footer-link {
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  border: 1px solid #2a2a4a;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-size: 0.9rem;
  transition: background 0.2s;
  background-color: transparent;
  cursor: pointer;
}
.end{
  color: #78788eff;
  padding-top:30px;
  font-size:16px;
}

.pr-footer-link:hover {
  background-color: #0a0a1f;
}
`;

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('annually'); // 'monthly' or 'annually'

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
      <style>{styles}</style>
      
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
        <button className="pr-footer-link">
          View Pricing Page <span>→</span>
        </button>
      </div>

    </div>
  );
}