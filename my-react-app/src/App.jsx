import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import FeatureCards from './components/FeatureCards/FeatureCards';
import Monitoring from './components/Monitoring/Monitoring';
import Landscape from './components/Landscape/Landscape';
import Pricing from './components/Pricing/Pricing';
import FAQs from './components/FAQs/FAQs';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <FeatureCards />
        <Monitoring />
        <Landscape />
        <Pricing />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
