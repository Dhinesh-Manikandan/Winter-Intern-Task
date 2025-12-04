import React, { useState, useEffect } from 'react';
import './ContactUs.css';
import FAQs from '../FAQs/FAQs';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Regex for strict email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Real-time validation
  useEffect(() => {
    const { name, email, message } = formData;
    const isValid =
      name.trim().length > 0 &&
      message.trim().length > 0 &&
      emailRegex.test(email);
    
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
      setShowToast(true);
      
      // Hide toast after 3 seconds (optional)
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div className="contact-page">
      {/* Green Toast Notification (Only shows on success) */}
      <div className={`toast-notification ${showToast ? 'show' : ''}`}>
        Message Submitted!
      </div>

      <div className="contact-container">
        {/* --- Top Section: Headers --- */}
        <div className="contact-header">
          <h1>G’day, Servus, Grüezi, Labas!</h1>
          <p className="sub-headline">
            Your competition never stops, and we don't either.<br />
            How can we assist you today?
          </p>
        </div>

        {/* --- Middle Section: Info Cards --- */}
        <div className="info-cards-grid">
          {/* Card 1: Email */}
          <div className="info-card">
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </div>
            <h3>Email support</h3>
            <p>hello@uncovered.so</p>
          </div>

          {/* Card 2: Visit */}
          <div className="info-card">
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <h3>Visit us</h3>
            <p>View on map</p>
          </div>

          {/* Card 3: Support */}
          <div className="info-card">
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3>In-Product Support</h3>
            <p>Chat message</p>
          </div>
        </div>

        {/* --- Bottom Section: Split Layout --- */}
        <div className="contact-split-section">
          
          {/* Left: Text Content */}
          <div className="contact-text-content">
            <div className="contact-badge">
              <span className="question-mark">?</span> Contact Form
            </div>
            <h2>Let’s Connect</h2>
            <p className="description">
              Uncovered is proudly made in Europe, with our HQ in Lithuania. Our team is remote-first, based in Austria and Singapore. We pride ourselves on servicing our customers around the clock, across Europe and Asia.
            </p>
            <p className="description">
              Our core hours are CET, but for critical items, we won't keep you hanging. Contact us at any time!
            </p>
          </div>

          {/* Right: Form OR Success State */}
          <div className="contact-form-wrapper">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="input-group half">
                    <label>Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group half">
                    <label>Email</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="input-group full">
                  <label>Message</label>
                  <textarea 
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isFormValid ? 'active' : ''}`}
                  disabled={!isFormValid}
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="success-state">
                <div className="success-circle">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
            )}
          </div>

        </div>
        <FAQs />
      </div>
    </div>
  );
};

export default ContactUs;