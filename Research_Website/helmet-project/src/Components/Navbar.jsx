import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'scope', 'milestones', 'downloads', 'about', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Project Scope', id: 'scope' },
    { name: 'Milestones', id: 'milestones' },
    { name: 'Downloads', id: 'downloads' },
    { name: 'About Us', id: 'team' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Feedbacks', id: 'feedbacks' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Left */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group"
          >
            <img 
              src="/logo.png" 
              alt="Smart Helmet Logo" 
              className="w-8 h-8 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span 
              className="text-sm font-bold tracking-wide"
              style={{ color: scrolled ? '#001A33' : '#001A33' }}
            >
              SMARTHELMET
            </span>
          </button>

          {/* Center Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-[#0055FF] ${
                  activeSection === item.id
                    ? 'text-[#0055FF]'
                    : 'text-[#001A33]/70'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact CTA Right */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 bg-[#0055FF] text-white text-sm font-semibold rounded-lg hover:bg-[#0044CC] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#001A33] hover:bg-slate-100 focus:outline-none transition-all duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 shadow-lg animate-slide-down">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-[#0055FF]/10 text-[#0055FF]'
                    : 'text-[#001A33]/70 hover:bg-slate-50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-100">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-4 py-3 bg-[#0055FF] text-white text-sm font-semibold rounded-xl hover:bg-[#0044CC] transition-all duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
