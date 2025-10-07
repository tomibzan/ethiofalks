import { Link } from 'react-router-dom';

const ExplosivesDetail = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Explosives & Blasting Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Licensed, safe, and reliable supply of industrial explosives for Ethiopia’s mining, quarrying, and civil construction sectors.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-6">
            Ethio-Express is a **Ministry of Urban Development and Construction-licensed** importer and distributor of industrial explosives. We provide end-to-end solutions for drilling and blasting operations — from secure import and storage to compliant delivery and technical support.
          </p>
          <p className="text-gray-700">
            Our strict adherence to national safety protocols ensures that your projects proceed **on schedule, without risk**, and in full compliance with Ethiopian regulations.
          </p>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Provide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-ethioGreen mb-3">Licensed Supply</h3>
              <p className="text-gray-700">
                Full-range industrial explosives imported and distributed under official Ethiopian government license.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-ethioGreen mb-3">Safe Logistics</h3>
              <p className="text-gray-700">
                Secure transportation and handling by certified personnel, following national safety standards.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-ethioGreen mb-3">Technical Support</h3>
              <p className="text-gray-700">
                Guidance on storage, handling, and usage to ensure operational safety and efficiency.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-ethioGreen mb-3">Project-Scale Flexibility</h3>
              <p className="text-gray-700">
                Supply solutions tailored to small quarries, large mines, or major civil infrastructure projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="py-12 bg-ethioGreen/10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-800 italic">
            ⚠️ All explosive materials are handled in strict compliance with Ethiopian law and Ministry of Urban Development and Construction regulations. Unauthorized handling is prohibited.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Plan Your Blasting Operation?
          </h2>
          <p className="text-gray-700 mb-8">
            Contact our licensed explosives team for a consultation, quote, or compliance guidance.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-ethioGreen text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExplosivesDetail;