import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    Platform: [
      { label: 'Product', href: '#' },
      { label: 'Win-Loss and Churn', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Pricing', section: 'pricing' },
      { label: 'Contact Us', href: '#' }
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' }
    ]
  };

  const handleLinkClick = (e, link) => {
    if (link.section) {
      e.preventDefault();
      scrollToSection(link.section);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Uncovered</h3>
            <p className="footer-tagline">
              Uncovered automates Competitive Intelligence for B2B SaaS marketing, product, and sales teams. Monitor your competitors pricing, positioning, feature changes, A/B tests, and more.
            </p>
            <p className="footer-location">Made in Europe 🇪🇺</p>
          </div>

          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-column">
                <h4 className="footer-column-title">{category}</h4>
                <ul className="footer-column-links">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href || '#'} 
                        onClick={(e) => handleLinkClick(e, link)}
                        className="footer-link"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Uncovered. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

