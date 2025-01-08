import React from 'react';
import { Zap, Shield, Rocket, BarChart, Users, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Enhanced Productivity',
      description: 'Automate repetitive tasks and streamline workflows to boost team efficiency by up to 300%',
      metric: '3x Faster',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and security protocols to keep your data protected at all times',
      metric: '99.9% Uptime',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Scalable Solution',
      description: 'Grow your AI capabilities seamlessly as your business expands and evolves',
      metric: 'Unlimited Scale',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics capabilities',
      metric: 'Real-time Data',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration across teams with integrated AI tools',
      metric: '10x Efficiency',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Time Savings',
      description: 'Reduce manual work hours and focus on strategic initiatives that matter',
      metric: '70% Time Saved',
      gradient: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <div className="relative bg-slate-900 py-24 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-1/4 -right-48 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-1/4 -left-48 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Why Choose Nexus AI
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Experience the competitive advantage of next-generation AI technology
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-1 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300"
            >
              <div className="h-full bg-slate-900 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${benefit.gradient} text-white`}>
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-semibold bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
                    {benefit.metric}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;