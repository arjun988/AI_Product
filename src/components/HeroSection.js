import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Example icon

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center"
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 sm:px-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6 animate__animated animate__fadeIn">
          AI Product Name
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
          Unlock the full potential of your business with cutting-edge AI that simplifies operations, drives innovation, and delivers measurable results.
        </p>

        {/* Call to Action Button */}
        <a
          href="#features"
          className="inline-flex items-center justify-center text-lg sm:text-xl text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          <span className="mr-4">Discover More</span>
          <FaArrowDown size={22} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
