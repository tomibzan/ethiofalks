export const servicesData = [
  {
    id: 1,
    slug: "website-development",
    title: "Website Development",
    description: "Custom, responsive websites built with modern frameworks for businesses and organizations.",
    details: "From concept to launch, we create fast, secure, and SEO-friendly websites tailored to your brand and goals.",
    icon: "🌐"
  },
  {
    id: 2,
    slug: "it-consultancy",
    title: "IT Consultancy",
    description: "Strategic technology planning, infrastructure assessment, and digital transformation guidance.",
    details: "Our experts help you optimize IT operations, reduce costs, and align technology with your business objectives.",
    icon: "📊"
  },
  {
    id: 3,
    slug: "computer-repair",
    title: "Computer & Electronics Repair",
    description: "Professional repair services for laptops, desktops, printers, and related electronic devices.",
    details: "Fast, reliable hardware diagnostics and repair with genuine parts and warranty on all services.",
    icon: "💻",
    externalUrl: "https://ethiofox.click"
  },
  {
    id: 4,
    slug: "networking-security",
    title: "Networking & Security Systems",
    description: "Installation and configuration of office networks, security cameras, and access control systems.",
    details: "End-to-end solutions for secure, scalable network infrastructure and surveillance systems for homes and businesses.",
    icon: "🔒",
    externalUrl: "https://ethiofox.click"
  },
  // 👇 NEW SERVICE — Remote Software Support
  {
    id: 5,
    slug: "Request-remote-support",
    title: "Request Remote Support",
    description: "Fix software, configuration, and network issues remotely — if no onsite visit is needed.",
    details: "Submit a request through our portal to get immediate help with software installation, troubleshooting, system setup, and remote diagnostics.",
    icon: "🖥️",
    externalUrl: "https://ethiofox.click"
  }
];

export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug);
};