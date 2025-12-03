import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import FAQs from './components/FAQs/FAQs';
import LogosScroll from './components/LogosScroll/LogosScroll';
import FeaturesSection from "./components/FeaturesSection/FeatureSection";
import IconsScroll from './components/IconsScroll/IconsScroll';
import Footers from './components/Globe/GlobeIcon';
import './App.css';

function App() {
  return (
    <div className="App">
     
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
        <section className="disappear">
              <Features />
         </section>
        <FeaturesSection />
        <IconsScroll />
          
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
    </div>
  );
}

export default App;