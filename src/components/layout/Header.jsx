import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Projects', path: 'projects' },
    { name: 'Career', path: 'career' },
    { name: 'Contact', path: 'contact' },
  ];

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      // If not on home page, we might need a different logic or redirect
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 shadow-lg' : 'py-6'
      }`}
    >
      <div className="container">
        <div className={`glass rounded-2xl px-6 md:px-8 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'mx-0' : 'mx-4'
        }`}>
          <RouterLink to="/" className="text-2xl font-bold font-heading gradient-text">
            ABHINAV
          </RouterLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.path)}
                className="text-sm font-medium hover:text-blue-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <RouterLink 
              to="/blog" 
              className="px-4 py-2 rounded-full glass hover:bg-white hover:text-black transition-all text-sm font-medium"
            >
              Blog
            </RouterLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 right-0 mx-4 md:hidden"
          >
            <div className="glass rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.path)}
                  className="text-lg font-medium text-left py-2 border-b border-white/5"
                >
                  {link.name}
                </button>
              ))}
              <RouterLink 
                to="/blog" 
                className="text-lg font-medium py-2 border-b border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </RouterLink>
              <div className="flex gap-4 mt-4">
                <Github size={20} className="text-gray-400" />
                <Linkedin size={20} className="text-gray-400" />
                <Twitter size={20} className="text-gray-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
