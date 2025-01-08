import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Modal component
const Modal = ({ isOpen, onClose, testimonial }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold text-white mb-4">{testimonial.name}</h3>
        <p className="text-gray-400 mb-4">{testimonial.title}</p>
        <p className="text-gray-300">{testimonial.message}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(null);

  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO, Tech Innovators',
      message: 'This AI product revolutionized our workflow. It\'s fast, efficient, and incredibly accurate!',
    },
    {
      name: 'Jane Smith',
      title: 'Product Manager, Future Solutions',
      message: 'An indispensable tool for our team. It made complex tasks a breeze!',
    },
    {
      name: 'Sara Lee',
      title: 'Operations Lead, TechCorp',
      message: 'With this AI solution, our productivity soared. It\'s a must-have!',
    },
  ];

  const openModal = (testimonial) => {
    setCurrentTestimonial(testimonial);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentTestimonial(null);
  };

  return (
    <section
      id="testimonials"
      className="py-16 px-4 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"
    >
      <h2 className="text-4xl sm:text-5xl font-semibold text-center text-white mb-12 animate__animated animate__fadeIn">
        Customer Testimonials
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer w-full sm:w-80 md:w-1/3 mx-auto"
            data-aos="fade-up"
            onClick={() => openModal(testimonial)}
          >
            <p className="text-gray-300 mb-4">{`"${testimonial.message}"`}</p>
            <h3 className="text-2xl font-semibold text-white">{testimonial.name}</h3>
            <p className="text-gray-400">{testimonial.title}</p>
          </div>
        ))}
      </div>

      {/* Modal for expanded testimonial */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        testimonial={currentTestimonial}
      />
    </section>
  );
};

export default Testimonials;
