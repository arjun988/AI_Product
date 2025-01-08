import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleOpenModal = (feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
  };

  const features = [
    {
      title: 'Feature 1',
      description: 'Description of the first feature.',
      detailedInfo: 'Detailed information about Feature 1. It solves X problem and benefits Y in the process.',
    },
    {
      title: 'Feature 2',
      description: 'Description of the second feature.',
      detailedInfo: 'Detailed information about Feature 2. It optimizes Z processes for better efficiency.',
    },
    {
      title: 'Feature 3',
      description: 'Description of the third feature.',
      detailedInfo: 'Detailed information about Feature 3. It enhances your workflow by providing A and B advantages.',
    },
  ];

  return (
    <section id="features" className="py-16 px-6 sm:px-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-90">
      <h2 className="text-4xl font-semibold text-center text-white mb-12 animate__animated animate__fadeIn">
        AI Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
            <button
              onClick={() => handleOpenModal(feature)}
              className="mt-4 inline-block text-sm text-white bg-primary hover:bg-secondary font-semibold py-2 px-4 rounded-lg transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <h3 className="text-3xl font-semibold text-black mb-4">{selectedFeature.title}</h3>
            <p className="text-lg text-gray-700 mb-6">{selectedFeature.detailedInfo}</p>
            <button
              onClick={handleCloseModal}
              className="inline-block text-lg text-white bg-gray-800 hover:bg-gray-700 font-semibold py-2 px-6 rounded-lg transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
