import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import Logo from './Logo';

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

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
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
      <div className="header-wrapper">
        <div className="header-container">
          <div className="logo-container">
            <div className="logo" onClick={() => scrollToSection('hero')}>
              <Logo />
            </div>
          </div>
          
          <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            {menuItems.map((item, index) => (
              <div key={index} className="nav-item-container">
                <a
                  className="nav-link"
                  href={item.href || `#${item.section}`}
                  onClick={(e) => item.section && handleNavClick(e, item.section)}
                  tabIndex={0}
                >
                  <div className="nav-content nav-content-default">
                    <div className="nav-label">
                      <p className="nav-text">{item.label}</p>
                    </div>
                  </div>
                  <div className="nav-content nav-content-hover">
                    <div className="nav-label">
                      <p className="nav-text">{item.label}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <div className="header-action-container">
              <a 
                className="btn-login-link" 
                href="#"
                tabIndex={0}
              >
                <div className="btn-content btn-content-default">
                  <div className="btn-label">
                    <p className="btn-text">Login</p>
                  </div>
                </div>
                <div className="btn-content btn-content-hover">
                  <div className="btn-label">
                    <p className="btn-text">Login</p>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="header-action-container">
              <a
                className="btn-get-uncovered"
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('pricing');
                }}
                tabIndex={0}
              >
                <div className="btn-label-cta">
                  <p className="btn-text-cta">Get Uncovered</p>
                </div>
                <div className="btn-icon-right">
                  <svg 
                    width="100%" 
                    height="1.5em" 
                    strokeWidth="1.5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <path 
                      d="M6 12h12.5m0 0l-6-6m6 6l-6 6" 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

