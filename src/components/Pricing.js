import React, { useState } from 'react';
import { Check, X, ChevronRight, Zap } from 'lucide-react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      billing: 'per month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 team members',
        '50 AI operations per day',
        'Basic analytics dashboard',
        'Email support',
        'API access',
        '99.9% uptime SLA'
      ],
      highlight: false,
      gradient: 'from-purple-500/50 to-blue-500/50'
    },
    {
      name: 'Professional',
      price: '$149',
      billing: 'per month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 team members',
        'Unlimited AI operations',
        'Advanced analytics & reporting',
        'Priority support',
        'Full API access',
        'Custom model training',
        'Dedicated account manager'
      ],
      highlight: true,
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      billing: 'custom billing',
      description: 'For large-scale operations',
      features: [
        'Unlimited team members',
        'Custom AI model development',
        'Enterprise analytics suite',
        '24/7 premium support',
        'Full API access',
        'Custom integration',
        'Dedicated success team',
        'Custom SLA'
      ],
      highlight: false,
      gradient: 'from-purple-500/50 to-blue-500/50'
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
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className={`relative p-1 rounded-xl bg-gradient-to-r ${plan.gradient} transition-all duration-300 ${plan.highlight ? 'scale-105' : 'hover:scale-105'}`}>
                <div className="h-full bg-slate-900 rounded-lg p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 text-sm">/{plan.billing}</span>
                    </div>
                    <p className="text-slate-300">{plan.description}</p>
                  </div>

                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full mt-8 py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Get Started <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 max-w-lg w-full shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedPlan.name} Plan</h3>
                  <p className="text-slate-400">{selectedPlan.description}</p>
                </div>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <Zap className="w-8 h-8 text-purple-400" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Ready to get started?</h4>
                    <p className="text-slate-300">Set up your account in minutes</p>
                  </div>
                </div>

                <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Continue to Setup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;