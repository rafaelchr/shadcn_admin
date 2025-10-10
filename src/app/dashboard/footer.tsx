
// src/components/Footer.js
// Komponen Footer
const Footer = () => {
  const footerLinks = [
    { name: 'About', href: '#' },
    { name: 'Help', href: '#' },
    { name: 'Contact', href: '#' },
  ];
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          
          {/* Copyright */}
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} FILM.IO. All rights reserved.
          </p>
          
          {/* Navigasi Footer */}
          <div className="flex space-x-6">
            {footerLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm text-gray-400 hover:text-indigo-400 transition duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;