import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Faq from './components/Faq';
import HowToReceive from './components/HowToReceive';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import SaleNotifications from './components/SaleNotifications';

function App() {
  return (
    <div className="min-h-screen bg-offWhite">
      <Header />
      <main>
        <Hero />
        <Features />
        <Faq />
        <HowToReceive />
        <Testimonials />
        <Guarantee />
        <FinalCta />
      </main>
      <Footer />
      <SaleNotifications />
    </div>
  );
}

export default App;