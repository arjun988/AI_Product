import React, { useState } from 'react';
import { Command, Cpu, Brain, Workflow, X, ChevronRight } from 'lucide-react';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: <Command className="w-6 h-6" />,
      title: 'Natural Language Processing',
      description: 'Advanced language understanding and generation capabilities powered by state-of-the-art AI models.',
      detailedInfo: 'Our NLP engine processes and understands human language with unprecedented accuracy, enabling natural conversations, content generation, and text analysis at scale.',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Automated Decision Making',
      description: 'Intelligent systems that analyze data and make informed decisions in real-time.',
      detailedInfo: 'Leverage our advanced decision-making algorithms to automate complex processes, reduce human error, and increase operational efficiency across your organization.',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and patterns with our advanced machine learning models.',
      detailedInfo: 'Harness the power of predictive analytics to anticipate market trends, customer behavior, and potential risks before they impact your business.',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Process Automation',
      description: 'Streamline workflows with intelligent automation solutions.',
      detailedInfo: 'Transform your business processes with end-to-end automation that adapts to your needs, learns from patterns, and continuously improves efficiency.',
      gradient: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-900 py-24 px-6">
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
              Powerful Features
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Experience the next generation of AI capabilities designed to transform your business operations
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-1 rounded-xl bg-gradient-to-r from-purple-500/50 to-blue-500/50 hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
            >
              <div className="relative h-full bg-slate-900 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.gradient} text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <button
                  onClick={() => setSelectedFeature(feature)}
                  className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-lg w-full shadow-2xl">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${selectedFeature.gradient} text-white`}>
                    {selectedFeature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedFeature.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-slate-300 leading-relaxed">{selectedFeature.detailedInfo}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;