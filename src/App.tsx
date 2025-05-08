import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Faq from './components/Faq';
import HowToReceive from './components/HowToReceive';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import SalesNotifications from './components/ui/SalesNotifications';

function App() {
  return (
    <div className="min-h-screen bg-offWhite font-sans">
      <Header />
      <Hero />
      <Benefits />
      <Faq />
      <HowToReceive />
      <Testimonials />
      <Guarantee />
      <FinalCta />
      <Footer />
      <SalesNotifications />
    </div>
  );
}

export default App;