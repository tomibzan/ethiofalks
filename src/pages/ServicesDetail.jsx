import { useParams } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brandLight">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-ethioGreen font-medium hover:underline">
            ← Back to All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brandLight min-h-screen">
      {/* Hero Banner */}
      <section className="bg-brandNavy py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-4xl mb-4 text-ethioGreen">{service.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p>{service.details}</p>
          </div>

          {/* Action CTA */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="text-center">
              {service.externalUrl ? (
                <div>
                  <a
                    href={service.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-ethioGreen text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 transition shadow-md"
                  >
                    Go to Service Portal
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    You'll be redirected to our secure portal at <span className="font-mono">ethiofox.click</span>
                  </p>
                </div>
              ) : (
                <div>
                  <Link
                    to="/contact"
                    className="inline-block bg-brandBlue text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition shadow-md"
                  >
                    Get Started Today
                  </Link>
                  <p className="text-sm text-gray-600 mt-3">
                    We’ll contact you within 24 hours to discuss your project.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;