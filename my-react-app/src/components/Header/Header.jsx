import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import Logo from './Logo'; // Ensure this path is correct

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

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

  const menuItems = [
    { label: 'Product', section: 'features' },
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
    { label: 'Pricing', section: 'pricing' },
    { label: 'Contact Us', href: '#contact' }
  ];

  return (
    <header ref={headerRef} className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        
        {/* Left: Logo */}
        <div className="logo-section">
          <div className="logo-wrapper" onClick={() => scrollToSection('hero')}>
            <Logo />
          </div>
        </div>

        {/* Center: Floating Pill Navigation */}
        <nav className={`nav-pill ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              className="nav-link"
              href={item.href || `#${item.section}`}
              onClick={(e) => {
                e.preventDefault();
                if (item.section) scrollToSection(item.section);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="actions-section">
          <a href="#login" className="btn-login">
            Login
          </a>

          <a 
            href="#pricing" 
            className="btn-get-uncovered"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('pricing');
            }}
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