import { Link } from 'react-router-dom';

const About = () => {
  const coreValues = [
    {
      title: "Technical Excellence",
      description: "Certified expertise with up-to-date technologies and best practices."
    },
    {
      title: "Client-Centric Approach",
      description: "Your goals drive our process — from consultation to support."
    },
    {
      title: "Reliability",
      description: "On-time delivery, honest communication, and dependable service."
    },
    {
      title: "Local Insight",
      description: "Solutions built for Ethiopia’s unique infrastructure and business needs."
    },
    {
      title: "Security & Privacy",
      description: "Your data and systems protected with industry-standard protocols."
    },
    {
      title: "Continuous Learning",
      description: "We evolve through ongoing training and technology adoption."
    }
  ];

  return (
    <>
      {/* Hero Section — Left-Aligned */}
      <section className="bg-brandNavy py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About EthioFalks IT Services
              </h1>
              <p className="text-xl text-ethioGreen font-semibold mb-6">
                Professional. Reliable. Ethiopian.
              </p>
              <p className="text-lg mb-6">
                We are a trusted Ethiopian technology partner specializing in website development, IT consultancy, hardware repair, and integrated security solutions.
              </p>
              <p className="text-lg">
                Our team blends international technical standards with deep local experience to deliver solutions that work in Ethiopia’s unique environment.
              </p>
            </div>
            <div className="bg-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <blockquote className="text-white text-lg italic">
                “We don’t just fix technology — we empower Ethiopian businesses to thrive with it.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision — Clean Two-Column */}
      <section className="py-20 bg-brandLight">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To empower Ethiopian businesses and individuals with reliable, secure, and affordable IT solutions that drive productivity and growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To be Ethiopia’s most trusted and innovative IT services provider, recognized for excellence, integrity, and client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values — Modern Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              These principles guide every project we undertake and every client we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="group p-6 border border-gray-200 rounded-2xl hover:border-brandBlue transition"
              >
                <h3 className="text-xl font-semibold text-brandBlue mb-3 group-hover:text-blue-700">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;