import React from 'react';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation placeholder - you might want to add a proper navbar component */}
      <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          {/* Add navigation content here */}
        </div>
      </div>

      {/* Main content sections */}
      <main>
        {/* Each section is self-contained with its own padding and background */}
        <HeroSection />
        <Features />
        <Benefits />
        <Testimonials />
        <Pricing />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;