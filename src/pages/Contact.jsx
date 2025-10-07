import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-brandLight min-h-screen">
      {/* Hero Banner */}
      <section className="bg-brandNavy py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project? Need support? Our team is ready to help your business succeed with reliable IT solutions.
          </p>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📍 Address</h3>
                <p className="text-gray-700">Addis Ababa, Ethiopia</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📞 Phone</h3>
                <p className="text-gray-700">+251 91 261 2046</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">✉️ Email</h3>
                <p className="text-gray-700">info@ethiofalks.com</p>
              </div>
              <div className="pt-4">
                <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/ethiofalks" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brandBlue">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/></svg>
                  </a>
                  <a href="https://t.me/ethiofalks" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brandBlue">
                    <span className="sr-only">Telegram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.705 8.293l-2.22 9.355c-.24.998-.92 1.38-1.74.948l-3.184-2.305-1.42 1.38c-.318.308-.563.556-1.03.534-.25-.012-1.05-.44-1.534-.655-.63-.28-1.095-.432-1.095-1.02 0-.503.343-.785.763-.976.48-.22 1.227-.56 2.318-.996l1.186-.463 2.25-2.16c.21-.2.4-.38.4-.65 0-.33-.26-.5-.55-.5h-3.5c-.99 0-1.8.81-1.8 1.8 0 .3.08.58.22.83l1.9 3.27-1.4 1.37c-.318.308-.563.556-1.03.534-.25-.012-1.05-.44-1.534-.655-.63-.28-1.095-.432-1.095-1.02 0-.503.343-.785.763-.976.48-.22 2.23-1.02 2.23-1.02l4.84-2.16c.58-.26 1.14-.17 1.5.22.36.39.42.99.16 1.57z"/></svg>
                  </a>
                  <a href="https://x.com/ethiofalks" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brandBlue">
                    <span className="sr-only">X</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandBlue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandBlue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Service Needed</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandBlue focus:border-transparent"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Website Development">Website Development</option>
                  <option value="IT Consultancy">IT Consultancy</option>
                  <option value="Hardware Repair">Computer & Electronics Repair</option>
                  <option value="Security Systems">Networking & Security Systems</option>
                  <option value="Remote Support">Remote Software Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandBlue focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;