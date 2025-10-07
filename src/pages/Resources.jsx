import { Link } from 'react-router-dom';

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Crusher Machines: Types & Applications",
      excerpt: "How rock crushers reduce large stones into gravel for road construction and quarrying.",
      slug: "crusher-machines",
      icon: "🪨"
    },
    {
      id: 2,
      title: "Industrial Explosives: Safe Handling Overview",
      excerpt: "Compliance-focused guide to storage and logistics of civil industrial explosives in Ethiopia.",
      slug: "explosives-handling",
      icon: "💥"
    },
    {
      id: 3,
      title: "Conveyor Belt Solutions for Mining & Cement",
      excerpt: "Steel cord vs. textile belts: selection criteria for harsh industrial environments.",
      slug: "conveyor-belts",
      icon: "🏭"
    },
    {
      id: 4,
      title: "Grinding Media Specifications",
      excerpt: "Performance data for high-chrome grinding balls in raw and cement mills.",
      slug: "grinding-media",
      icon: "⚙️"
    },
    {
      id: 5,
      title: "Refractory Materials for Rotary Kilns",
      excerpt: "Brick and castable selection guide for cement plant furnaces and boilers.",
      slug: "refractory-materials",
      icon: "🔥"
    },
    {
      id: 6,
      title: "HVAC&R Systems for Industrial Facilities",
      excerpt: "Cooling and refrigeration solutions for food storage, factories, and commercial buildings.",
      slug: "hvac-systems",
      icon: "❄️"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Resources
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Expert guides, specifications, and compliance insights for industrial professionals.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div 
                key={resource.id} 
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition bg-white"
              >
                <div className="text-3xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resource.excerpt}
                </p>
                <Link 
                  to={`/resources/${resource.slug}`} 
                  className="text-ethioGreen font-medium hover:underline flex items-center"
                >
                  Read Guide →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Need Technical Support?
          </h2>
          <p className="text-gray-700 mb-8">
            Our engineering team is ready to provide specifications, compliance documentation, or on-site consultation for your project.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-ethioGreen text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Resources;