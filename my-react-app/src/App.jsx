import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
// import FeatureCards from './components/FeatureCards/FeatureCards';
// import Monitoring from './components/Monitoring/Monitoring';
// import Landscape from './components/Landscape/Landscape';
import Pricing from './components/Pricing/Pricing';
import FAQs from './components/FAQs/FAQs';
// import Footer from './components/Footer/Footer'; // You are using 'Footers' instead
import HeroImageTilt from './components/Feature_Motion/HeroImageTilt';
import LogosScroll from './components/LogosScroll/LogosScroll';
import FeaturesSection from "./components/FeaturesSection/FeatureSection";
import IconsScroll from './components/IconsScroll/IconsScroll';
import Footers from './components/Globe/GlobeIcon';
import FluidBackground from './components/FluidBackground/FluidBackground';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Background Effect */}
      {/* <FluidBackground /> */}

      {/* Navigation Header */}
      <Header />
      
      <main>
        {/* --- Hero Section (Logo clicks scroll here) --- */}
        <section id="hero">
          <Hero />
          {/* <HeroImageTilt /> */}
          <LogosScroll/>
        </section>

        {/* --- Product Section (Linked to "Product" menu) --- */}
        <section id="features">
          <Features />
          {/* <FeatureCards /> */}
          {/* <Monitoring /> */}
          {/* <Landscape /> */}
          <FeaturesSection/>
          <IconsScroll/>
        </section>

        {/* --- Pricing Section (Linked to "Pricing" menu & "Get Uncovered" button) --- */}
        <section id="pricing">
          <Pricing />
          <FAQs />
        </section>

        {/* --- Contact Section (Linked to "Contact Us" menu) --- */}
        <section id="contact">
          <Footers/>
        </section>
      </main>
      
      {/* Old Footer commented out as per your code */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;