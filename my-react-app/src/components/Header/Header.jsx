import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // 1. Import Router hooks
import './Header.css';
import Logo from './Logo'; 
import Pricing_end from '../Pricing_end/Pricing_end';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  
  // 2. Initialize Hooks
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // 3. Updated Logic: Handle both Route navigation and Scroll navigation
  const handleNavigation = (e, item) => {
    e.preventDefault();

    if (item.path) {
      // If it's a separate page (like About Us), navigate to it
      navigate(item.path);
      setIsMobileMenuOpen(false);
    } else if (item.section) {
      // If it's a section on the Homepage (like Pricing)
      if (location.pathname !== '/') {
        // If we are NOT on home (e.g., on About page), go Home first
        navigate('/');
        // Wait for navigation to finish, then scroll (simple timeout approach)
        setTimeout(() => {
          scrollToSection(item.section);
        }, 100);
      } else {
        // If we are already on Home, just scroll
        scrollToSection(item.section);
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection('hero');
    }
  };

  // 4. Update Menu Items with 'path' for pages and 'section' for homepage scrolls
  const menuItems = [
    { label: 'Product', section: 'features' },      // Scroll on Home
    { label: 'About Us', path: '/about' },          // New Route
    { label: 'Careers', path: '/careers' },         // New Route
    { label: 'Blog', path: '/blog' },               // New Route
    { label: 'Pricing', path: '/pricing' },         // New Route
    { label: 'Contact Us', path: '/contact' }       // New Route
  ];

  return (
    <header ref={headerRef} className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        
        {/* Left: Logo */}
        <div className="logo-section">
          <div className="logo-wrapper" onClick={handleLogoClick}>
            <Logo />
          </div>
        </div>

        {/* Center: Floating Pill Navigation */}
        <nav className={`nav-pill ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          
          {/* Close Button (Only visible when mobile menu is open) */}
          {isMobileMenuOpen && (
            <button 
              className="mobile-close-btn" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}

          {menuItems.map((item, index) => (
            <a
              key={index}
              className="nav-link"
              href={item.path || `#${item.section}`} // Fallback for accessibility
              data-text={item.label}
              onClick={(e) => handleNavigation(e, item)} // Use new handler
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="actions-section">
          {/* Update Login to use Link or Navigation if needed, or keep as is */}
          <a href="#login" className="btn-login" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            Login
          </a>

          <a 
            
            className="btn-get-uncovered"
            onClick={() => navigate('/pricing')}
          >
            <span>Get Uncovered</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;