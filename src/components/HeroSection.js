import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Command } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 pt-32 pb-24 min-h-screen flex flex-col justify-center items-center">
        {/* Logo and brand */}
        <div className="flex items-center gap-2 mb-8">
          <Command className="w-12 h-12 text-purple-400" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Nexus AI
          </span>
        </div>

        {/* Hero text with animation */}
        <div className={`text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
              Transform Your Business
            </span>
            <br />
            <span className="text-white">With Intelligent AI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12">
            Harness the power of next-generation AI to streamline operations, 
            boost productivity, and drive innovation across your enterprise.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-500"></div>
              <span className="relative flex items-center gap-2 text-white font-semibold">
                Get Started <Sparkles className="w-5 h-5" />
              </span>
            </button>
            
            <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
              Learn More <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {[
            { label: 'Enterprise Clients', value: '500+' },
            { label: 'Accuracy Rate', value: '99.9%' },
            { label: 'Processing Power', value: '100x' }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;