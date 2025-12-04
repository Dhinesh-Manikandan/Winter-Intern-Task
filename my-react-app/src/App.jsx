import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// --- Component Imports ---
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import FAQs from './components/FAQs/FAQs';
import LogosScroll from './components/LogosScroll/LogosScroll';
import FeaturesSection from "./components/FeaturesSection/FeatureSection";
import IconsScroll from './components/IconsScroll/IconsScroll';
import Footers from './components/Globe/GlobeIcon';
import Pricing_end from './components/Pricing_end/Pricing_end';
import ContactUs from './components/ContactUs/ContactUs';
// --- New Page Imports ---
// Ensure this path matches where you saved the AboutUs.js file
import AboutUs from './components/AboutUs/AboutUs'; 

// --- Helper: Scroll To Top ---
// This ensures that when you switch pages, the window snaps to the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Home Component ---
// I have extracted your main landing page content here so it only shows on the "/" route
const Home = () => {
  return (
    <main>
      {/* --- Hero Section (Logo clicks scroll here) --- */}
      <section id="hero">
        <Hero />
        <LogosScroll/>
      </section>

      {/* --- Product Section --- */}
      <section id="features">
        <section className="disappear">
          <Features />
        </section>
        <FeaturesSection />
        <IconsScroll />
      </section>

      {/* --- Pricing Section --- */}
      <section id="pricing">
        <Pricing />
        <FAQs />
      </section>

      {/* --- Contact / Footer --- */}
      
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop /> {/* Activates the scroll-to-top behavior */}
        
        {/* Header stays outside Routes so it is visible on EVERY page */}
        <Header />
        
        <Routes>
          {/* 1. The Home Route (Your original landing page) */}
          <Route path="/" element={<Home />} />
          
          {/* 2. The New About Us Page */}
          <Route path="/about" element={<AboutUs />} />
          
          {/* 3. Placeholders for other links to prevent crashes */}
          <Route path="/careers" element={<div style={{paddingTop: '120px', color:'white', textAlign:'center',fontSize:'1.5rem',fontWeight:'500'}}>Careers Page Coming Soon</div>} />
          <Route path="/blog" element={<div style={{paddingTop: '120px', color:'white', textAlign:'center',fontSize:'1.5rem',fontWeight:'500'}}>Blog Page Coming Soon</div>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/login" element={<div style={{paddingTop: '120px', color:'white', textAlign:'center',fontSize:'1.5rem',fontWeight:'500'}}>Login Page</div>} />
          <Route path="/pricing" element={<Pricing_end/>} />
        </Routes>
        <section id="contact">
        <Footers/>
      </section>
      </div>
    </Router>
  );
}

export default App;