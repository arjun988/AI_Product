import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Modal component for form submission confirmation
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-10 rounded-lg max-w-lg w-full shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold text-white mb-4">Message Sent!</h3>
        <p className="text-gray-400">Thank you for reaching out. We will get back to you shortly.</p>
      </div>
    </div>
  );
};

const ContactForm = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setModalOpen(true);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-t from-black via-transparent to-transparent opacity-90">
      <h2 className="text-4xl sm:text-5xl font-semibold text-center text-white mb-12 animate__animated animate__fadeIn">
        Contact Us
      </h2>
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          data-aos="fade-up"
        >
          <div className="mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 text-gray-900 rounded-lg bg-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 text-gray-900 rounded-lg bg-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              className="w-full p-4 text-gray-900 rounded-lg bg-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-white rounded-lg text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Modal for confirmation */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default ContactForm;
