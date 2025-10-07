import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">EthioFalks IT Services</h3>
            <p className="text-sm">
              Professional IT solutions for businesses and individuals across Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-ethioGreen transition">All Services</Link></li>
              <li>
                <a 
                  href="https://ethiofox.click" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-ethioGreen transition"
                >
                  Remote Support
                </a>
              </li>
              <li><Link to="/contact" className="hover:text-ethioGreen transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm space-y-2">
              <p>Addis Ababa, Ethiopia</p>
              <p className="mt-3">📞 +251 91 2612046</p>
              <p>✉️ info@ethiofalks.com</p>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/251912320601" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              {/* Telegram */}
              <a 
                href="https://t.me/ethiofalks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="Telegram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.637 8.776l-1.415 5.65c-.142.565-.38 1.02-.66 1.302-.28.283-.734.52-1.3.661l-5.65 1.415 1.415-5.65 5.65-1.415zm-2.637.637l-2.91 2.772-1.198-1.198c-.297-.297-.778-.297-1.075 0-.297.297-.297.778 0 1.075l1.732 1.732c.148.148.341.222.535.222s.387-.074.535-.222l3.454-3.454c.297-.297.297-.778 0-1.075-.297-.297-.778-.297-1.075 0z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a 
                href="https://x.com/ethiofalks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition"
                aria-label="X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com/ethiofalks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.676 0h-21.352c-.732 0-1.324.593-1.324 1.324v21.352c0 .732.593 1.324 1.324 1.324h11.496v-9.653h-3.128v-3.73h3.128v-2.93c0-3.09 1.894-4.785 4.66-4.785 1.324 0 2.463.098 2.796.142v3.24h-1.92c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.73h-3.12v9.653h6.116c.732 0 1.324-.593 1.324-1.324v-21.352c0-.732-.593-1.324-1.324-1.324z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright + Designer Credit */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} EthioFalks IT Services. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-gray-500 flex items-center gap-1">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="text-orange-500"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 2.8-.7 1.3L11 15V9h1.5v5.2l3.5 1.9V7.8z"/>
            </svg>
            Designed by EthioFalks
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;