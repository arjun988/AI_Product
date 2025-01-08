import React from 'react';
import { FaLightbulb, FaShieldAlt, FaRocket } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Benefits = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="benefits"
      className="py-16 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"
    >
      <h2 className="text-4xl sm:text-5xl font-semibold text-center text-white mb-12 animate__animated animate__fadeIn">
        AI Product Benefits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 sm:px-10">
        {/* Benefit 1 */}
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          data-aos="fade-up"
        >
          <FaLightbulb className="text-5xl text-white mb-6" />
          <h3 className="text-2xl font-semibold text-white">Innovation</h3>
          <p className="text-gray-200 mt-2">Leverage cutting-edge technology to drive innovation in your business.</p>
        </div>
        {/* Benefit 2 */}
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaShieldAlt className="text-5xl text-white mb-6" />
          <h3 className="text-2xl font-semibold text-white">Security</h3>
          <p className="text-gray-200 mt-2">Ensure data privacy and protection with robust security features.</p>
        </div>
        {/* Benefit 3 */}
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaRocket className="text-5xl text-white mb-6" />
          <h3 className="text-2xl font-semibold text-white">Scalability</h3>
          <p className="text-gray-200 mt-2">Scale your operations effortlessly with AI-driven solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
