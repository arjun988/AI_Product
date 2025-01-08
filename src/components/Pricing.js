import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Modal component for pricing details
const Modal = ({ isOpen, onClose, plan }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold text-white mb-4">{plan.name} Plan</h3>
        <p className="text-gray-400">{plan.description}</p>
        <p className="text-gray-300 mt-4">Price: {plan.price}</p>
      </div>
    </div>
  );
};

const Pricing = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);

  const plans = [
    {
      name: 'Basic',
      price: '$19/month',
      description: 'Basic features and support.',
    },
    {
      name: 'Pro',
      price: '$49/month',
      description: 'Advanced features and priority support.',
    },
    {
      name: 'Enterprise',
      price: '$99/month',
      description: 'All features and dedicated account manager.',
    },
  ];

  const openModal = (plan) => {
    setCurrentPlan(plan);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentPlan(null);
  };

  return (
    <section id="pricing" className="py-16 px-4 bg-gradient-to-t from-black via-transparent to-transparent opacity-90">
      <h2 className="text-4xl sm:text-5xl font-semibold text-center text-white mb-12 animate__animated animate__fadeIn">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            data-aos="fade-up"
            onClick={() => openModal(plan)}
          >
            <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
            <p className="text-gray-400 mt-2">{plan.price}</p>
            <p className="text-gray-400 mt-2">{plan.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for expanded pricing details */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        plan={currentPlan}
      />
    </section>
  );
};

export default Pricing;
