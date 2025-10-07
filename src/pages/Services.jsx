import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const Services = () => {
  return (
    <div className="bg-brandLight min-h-screen">
      {/* Hero Section — Navy Background */}
      <section className="bg-brandNavy py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our IT Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            EthioFalks delivers professional website development, IT infrastructure, hardware repair, and security solutions — with quality and reliability you can count on.
          </p>
        </div>
      </section>

      {/* Services Grid — Clean Tiles */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="text-4xl mr-5 mt-1 text-ethioGreen">{service.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    {service.externalUrl ? (
                      <a 
                        href={service.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-brandBlue font-medium hover:text-blue-700 group-hover:translate-x-1 transition"
                      >
                        Access Service Portal
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link 
                        to={`/services/${service.slug}`} 
                        className="inline-flex items-center text-brandBlue font-medium hover:text-blue-700 group-hover:translate-x-1 transition"
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
    </div>
  );
};

export default Services;