import React, { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does the monitoring work?',
      answer: 'Our AI-powered system automatically crawls competitor websites, pricing pages, and other public sources on a daily basis. When changes are detected, you receive instant alerts via email or Slack.'
    },
    {
      question: 'Can I track custom competitors?',
      answer: 'Yes! You can add any competitor you want to track. Simply provide their website URL and we\'ll start monitoring them immediately.'
    },
    {
      question: 'What kind of changes do you track?',
      answer: 'We track pricing changes, feature announcements, website updates, content changes, job postings, and more. Our system is designed to catch anything that might impact your competitive position.'
    },
    {
      question: 'How long does it take to set up?',
      answer: 'Setup takes less than 5 minutes. Just sign up, add your competitors, and we\'ll start monitoring immediately. Your first insights will be available within 24 hours.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely! There are no long-term contracts. You can cancel your subscription at any time from your account settings.'
    },
    {
      question: 'Do you offer API access?',
      answer: 'API access is available on our Enterprise plan. Contact our sales team to learn more about integrating our data into your existing tools.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faqs">
      <div className="faqs-container">
        <div className="faqs-header">
          <h2 className="faqs-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="faqs-subtitle">
            Everything you need to know about our competitive intelligence platform.
          </p>
        </div>

        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

