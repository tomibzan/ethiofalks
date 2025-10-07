import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-lime-200 shadow-sm">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          EthioFalks IT Services
        </Link>
        
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-medium text-gray-700 hover:text-ethioGreen transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <a href="tel:+251912320601" className="font-medium text-gray-600 hover:text-ethioGreen">
          +251 91 2612046
        </a>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          EthioFalks IT Services
        </Link>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-medium text-gray-700 hover:text-ethioGreen py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+251912612046"
              className="font-medium text-gray-600 hover:text-ethioGreen py-2"
            >
              +251 912612046
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;