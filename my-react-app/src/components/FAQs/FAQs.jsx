import React, { useState } from 'react';

// Embedded CSS to ensure 100% compatibility without file errors
const styles = `
/* Main Container */
.faq-container {
  background-color: #030014; /* Deep dark background */
  color: white;
  padding: 6rem 1rem;
  font-family: sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
}

.faq-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
}

/* Tablet/Desktop Layout */
@media (min-width: 1024px) {
  .faq-wrapper {
    grid-template-columns: 0.8fr 1.2fr; /* Left column smaller than right */
    align-items: start;
  }
}

/* --- Left Column Styling --- */
.faq-left-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.faq-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #2a2a4a;
  border-radius: 999px;
  font-size: 0.875rem;
  color: #fff;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
}

.faq-title {
  font-size: 3rem; /* 48px */
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: white;
}

.faq-desc {
  color: #8888aa;
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 400px;
}

.faq-btn {
  background: transparent;
  border: 1px solid #2a2a4a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  font-size:16px;
}

.faq-btn:hover {
  background-color: #0a0a1f;
  border-color: #4a4a6a;
}

/* --- Right Column (Accordion) Styling --- */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  background-color: #05051e; /* Slightly lighter than bg */
  border: 1px solid #1f1f3a;
  border-radius: 20px;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.faq-item:hover {
  border-color: #4a4a6a;
}

.faq-question-btn {
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center icon vertically with text */
  cursor: pointer;
  color: white;
  gap: 1rem;
}

.faq-question-text {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
}

/* Circle around the arrow */
.faq-icon-wrapper {
  min-width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #2a2a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8888aa;
  transition: all 0.3s ease;
  flex-shrink: 0; /* Prevent icon shrinking */
}

.faq-item.open .faq-icon-wrapper {
  background-color: #7c3aed; /* Purple bg when open */
  border-color: #7c3aed;
  color: white;
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-item.open .faq-answer {
  max-height: 500px; /* Arbitrary large height for animation */
}

.faq-answer-inner {
  padding: 0 1.5rem 1.5rem 1.5rem;
  color: #8888aa;
  font-size: 1rem;
  line-height: 1.6;
}
`;

// FAQ Data based on your screenshot
const faqData = [
  {
    id: 1,
    question: "How does the fractional Competitive Intelligence teammate work?",
    answer: "Uncovered becomes part of your team. Delegate research and analysis on competitors or market. We proactively seek out intel on your behalf, and catch any gaps in your Competitive Intelligence program."
  },
  {
    id: 2,
    question: "Do you have an affiliate program?",
    answer: "Yes, we do have an affiliate program! We offer competitive rewards because we value our long-term partners. For details about our program, check out our Affiliate page in the footer."
  },
  {
    id: 3,
    question: "What are the payment terms of the subscriptions?",
    answer: "Uncovered offers monthly and annual subscription contracts. Monthly contracts are billed on a monthly basis, and annual contracts are billed annually."
  },
  {
    id: 4,
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial. Our trial is to make sure we are mutually a good fit. You are welcome to cancel during the trial period."
  }
];

export default function FAQs() {
  // State to track which FAQ is open. null means all closed.
  const [openId, setOpenId] = useState(); // Default open the first one per screenshot

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="faq-container">
        <div className="faq-wrapper">
          
          {/* Left Column */}
          <div className="faq-left-col">
            <div className="faq-tag">
              <span>?</span> FAQs
            </div>
            
            <h2 className="faq-title">
              Questions?<br />
              We've got answers.
            </h2>
            
            <p className="faq-desc">
              Find no-fluff answers here. If we've missed something, drop us an email or message.
            </p>
            
            <button className="faq-btn">
              Contact Us 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="faq-list">
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              
              return (
                <div 
                  key={item.id} 
                  className={`faq-item ${isOpen ? 'open' : ''}`}
                >
                  <button 
                    className="faq-question-btn"
                    onClick={() => toggleFAQ(item.id)}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <div className="faq-icon-wrapper">
                      {/* Simple Arrow Icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19V5M5 12l7-7 7 7"/>
                      </svg>
                    </div>
                  </button>
                  
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}