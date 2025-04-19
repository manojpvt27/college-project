import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronUp, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        if (window.scrollY > 500) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsNavOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      {/* Header */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-primary shadow-md py-2' 
            : 'bg-primary py-4'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-xl">BJC</span>
            </div>
            <span className="font-heading font-bold text-lg md:text-xl text-white">
              Bhatt Ji College
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-secondary' 
                  : 'text-white hover:text-secondary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/academics" 
              className={`font-medium transition-colors ${
                location.pathname === '/academics' 
                  ? 'text-secondary' 
                  : 'text-white hover:text-secondary'
              }`}
            >
              Academics
            </Link>
            <Link 
              to="/campus" 
              className={`font-medium transition-colors ${
                location.pathname === '/campus' 
                  ? 'text-secondary' 
                  : 'text-white hover:text-secondary'
              }`}
            >
              Campus Life
            </Link>
            <Link 
              to="/admissions" 
              className={`font-medium transition-colors ${
                location.pathname === '/admissions' 
                  ? 'text-secondary' 
                  : 'text-white hover:text-secondary'
              }`}
            >
              Admissions
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-secondary' 
                  : 'text-white hover:text-secondary'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="btn btn-secondary"
            >
              Apply Now
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
          >
            {isNavOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden bg-primary absolute w-full transition-all duration-300 shadow-lg ${
          isNavOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="container-custom flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium py-2 text-white ${location.pathname === '/' ? 'text-secondary' : 'hover:text-secondary'}`}
            >
              Home
            </Link>
            <Link 
              to="/academics" 
              className={`font-medium py-2 text-white ${location.pathname === '/academics' ? 'text-secondary' : 'hover:text-secondary'}`}
            >
              Academics
            </Link>
            <Link 
              to="/campus" 
              className={`font-medium py-2 text-white ${location.pathname === '/campus' ? 'text-secondary' : 'hover:text-secondary'}`}
            >
              Campus Life
            </Link>
            <Link 
              to="/admissions" 
              className={`font-medium py-2 text-white ${location.pathname === '/admissions' ? 'text-secondary' : 'hover:text-secondary'}`}
            >
              Admissions
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium py-2 text-white ${location.pathname === '/contact' ? 'text-secondary' : 'hover:text-secondary'}`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="btn btn-secondary self-start"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* College Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">BJC</span>
                </div>
                <span className="font-heading font-bold text-xl text-white">Bhatt Ji College</span>
              </div>
              <p className="text-gray-300 mb-4">
                Empowering minds, shaping futures. We're dedicated to providing excellence in education since 1980.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="text-white hover:text-secondary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Twitter" className="text-white hover:text-secondary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="text-white hover:text-secondary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-white hover:text-secondary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/academics" className="text-gray-300 hover:text-secondary transition-colors">
                    Programs & Courses
                  </Link>
                </li>
                <li>
                  <Link to="/admissions" className="text-gray-300 hover:text-secondary transition-colors">
                    Admissions Process
                  </Link>
                </li>
                <li>
                  <Link to="/campus" className="text-gray-300 hover:text-secondary transition-colors">
                    Campus Facilities
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                    Career Opportunities
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    Alumni
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="text-secondary mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">123 Education Ave, Academic City, Country</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="text-secondary flex-shrink-0" size={18} />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="text-secondary flex-shrink-0" size={18} />
                  <span className="text-gray-300">info@bhattjicollege.edu</span>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for updates on events, admissions, and campus news.
              </p>
              <form className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  aria-label="Email for newsletter"
                  className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800"
                />
                <button type="submit" className="btn btn-secondary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Bhatt Ji College. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-6 text-sm">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
          showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
};

export default Layout;