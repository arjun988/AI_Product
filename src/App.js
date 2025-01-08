import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-3xl font-semibold text-center text-white mb-8">Features</h2> */}
          <div className="flex flex-wrap justify-center gap-12">
            <Features />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-t from-black via-transparent to-transparent">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-3xl font-semibold text-center text-white mb-8">Benefits</h2> */}
          <div className="flex flex-wrap justify-center gap-12">
            <Benefits />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-3xl font-semibold text-center text-white mb-8">Testimonials</h2> */}
          <div className="flex flex-wrap justify-center gap-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Pricing />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
