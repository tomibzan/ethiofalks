import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const Home = () => {
  // Remove hero images for now (or keep 1 if you have a strong IT image)
  const heroBg = '/images/hero/it-background.jpg'; // Use 1 high-quality image

  return (
    <>
      {/* Hero Section — Left-Aligned */}
      <section className="relative w-full min-h-[calc(100vh-80px)] bg-brandNavy">
        {/* Background Image (Subtle) */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        
        {/* Content — Left Side */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 py-24 flex items-center h-full">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brandBlue bg-blue-50 rounded-full mb-4">
              IT Solutions for Ethiopia
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Technology That Works <span className="text-ethioGreen">For You</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Build, Connect, Secure. EthioFalks delivers end-to-end IT services. We design captivating custom websites, establish high-performance networking solutions, provide remote support, guarantee maximum uptime with on-site repair, and implement cutting-edge enterprise security systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-ethioGreen hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services — Modern Feature Tiles */}
      <section className="w-full py-20 bg-brandLight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We solve real-world IT challenges with certified expertise and local insight.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <div className="text-4xl mr-4 mt-1 text-ethioGreen">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-5">{service.description}</p>
                    {service.externalUrl ? (
                      <a 
                        href={service.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-brandBlue font-medium hover:text-blue-700"
                      >
                        Access Service Portal
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link 
                        to={`/services/${service.slug}`} 
                        className="inline-flex items-center text-brandBlue font-medium hover:text-blue-700"
                      >
                        Learn More
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — Gradient */}
      <section className="w-full py-20 bg-gradient-to-r from-brandNavy to-ethioGreen">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let’s discuss how EthioFalks can support your business goals.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-brandNavy font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 transition"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;