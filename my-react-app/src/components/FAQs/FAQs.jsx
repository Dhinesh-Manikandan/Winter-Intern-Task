import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FAQs.css';

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
  const navigate = useNavigate();
  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
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
            
            <button className="faq-btn" onClick={() => navigate('/contact')}>
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