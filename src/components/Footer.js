import React from 'react';
import { Command, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const links = {
    company: [
      { label: 'About' },
      { label: 'Careers' },
      { label: 'Press' },
      { label: 'Blog' },
    ],
    product: [
      { label: 'Features' },
      { label: 'Pricing' },
      { label: 'Documentation' },
      { label: 'API' },
    ],
    resources: [
      { label: 'Support' },
      { label: 'Partners' },
      { label: 'Community' },
      { label: 'Contact' },
    ],
    legal: [
      { label: 'Privacy' },
      { label: 'Terms' },
      { label: 'Security' },
      { label: 'Status' },
    ],
  };

  const handleClick = (label) => {
    console.log(`Clicked: ${label}`);
  };

  return (
    <footer className="relative bg-slate-900 pt-24 pb-12 px-6 border-t border-slate-800">
      <div className="relative container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Command className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Nexus AI
              </span>
            </div>
            <p className="text-slate-300 mb-6 max-w-sm">
              Transform your business with next-generation AI technology. Powerful, secure, and scalable solutions for enterprises.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Mail, label: 'Email' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  onClick={() => handleClick(label)}
                  className="text-slate-400 hover:text-white transition-colors p-1"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4 uppercase text-sm">{title}</h3>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleClick(link.label)}
                      className="text-slate-300 hover:text-white transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© 2025 Nexus AI. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((label) => (
              <button
                key={label}
                onClick={() => handleClick(label)}
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;