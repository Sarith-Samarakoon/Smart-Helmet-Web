import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Domain', path: '/domain' },
    { name: 'Milestones', path: '/milestones' },
    { name: 'Documents', path: '/documents' },
    { name: 'Presentations', path: '/presentations' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-teal-900 via-teal-700 to-cyan-600 text-white shadow-lg sticky top-0 z-50 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="Smart Helmet Logo" 
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Smart Helmet
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActive(item.path)
                      ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/50'
                      : 'text-teal-100 hover:bg-teal-600 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-100 hover:bg-teal-600 focus:outline-none transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X size={24} className="animate-spin-slow" /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-teal-800 to-teal-900 animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:translate-x-2 ${
                  isActive(item.path)
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'text-teal-100 hover:bg-teal-600 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
