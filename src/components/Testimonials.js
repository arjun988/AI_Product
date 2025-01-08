import React, { useState } from 'react';
import { X, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO, Tech Innovators',
      message: 'Nexus AI has transformed how we approach data analysis. The accuracy and speed are unprecedented, giving us a competitive edge we never thought possible.',
      image: '/api/placeholder/64/64',
      rating: 5,
      company: 'Tech Innovators',
      impact: '3x Revenue Growth'
    },
    {
      name: 'Jane Smith',
      title: 'Product Manager, Future Solutions',
      message: 'Implementation was seamless, and the results were immediate. Our team productivity has doubled, and the AI-driven insights have been game-changing.',
      image: '/api/placeholder/64/64',
      rating: 5,
      company: 'Future Solutions',
      impact: '200% Efficiency'
    },
    {
      name: 'Sara Lee',
      title: 'Operations Lead, TechCorp',
      message: 'The predictive analytics capabilities have revolutionized our decision-making process. We are now able to anticipate market trends with remarkable accuracy.',
      image: '/api/placeholder/64/64',
      rating: 5,
      company: 'TechCorp',
      impact: '45% Cost Reduction'
    }
  ];

  return (
    <div className="relative bg-slate-900 py-24 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-1/4 -left-48 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-1/4 -right-48 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Client Success Stories
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            See how leading companies are transforming their operations with Nexus AI
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveTestimonial(testimonial)}
              className="group cursor-pointer"
            >
              <div className="relative p-1 rounded-xl bg-gradient-to-r from-purple-500/50 to-blue-500/50 hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
                <div className="relative h-full bg-slate-900 rounded-lg p-6">
                  <div className="absolute -top-3 -right-3 p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-slate-400">{testimonial.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-slate-300 mb-4">{testimonial.message}</p>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-purple-400">{testimonial.company}</span>
                    <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
                      {testimonial.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeTestimonial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 max-w-2xl w-full shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{activeTestimonial.name}</h3>
                    <p className="text-slate-400">{activeTestimonial.title}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTestimonial(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <blockquote className="text-slate-300 text-lg leading-relaxed mb-6">
                "{activeTestimonial.message}"
              </blockquote>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full">
                  {activeTestimonial.impact}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;