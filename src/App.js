import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';
import ImpactSection from './components/ImpactSection';
import Healthcare from './components/Healthcare';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Features />
      <ImpactSection />
      <Healthcare/>
      <Footer />
    </div>
  );
};

export default App;
