import React, { useState } from 'react';
import { Send, CheckCircle, Mail, User, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="relative bg-slate-900 py-24 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-1/4 -left-48 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-1/4 -right-48 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Get in Touch
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have questions about Nexus AI? Our team is here to help
          </p>
        </div>

        <div className="relative p-1 rounded-xl bg-gradient-to-r from-purple-500/50 to-blue-500/50">
          <div className="bg-slate-900 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-800 text-white rounded-lg py-3 px-10 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800 text-white rounded-lg py-3 px-10 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full bg-slate-800 text-white rounded-lg py-3 px-10 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                    placeholder="Your message"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full group relative py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="flex items-center justify-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Success Modal */}
        {isSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 max-w-md w-full shadow-2xl">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-300 mb-6">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;