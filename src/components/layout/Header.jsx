import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Projects', path: 'projects' },
    { name: 'Vision', path: 'roadmap' },
    { name: 'Career', path: 'career' },
    { name: 'Contact', path: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only run scroll spy on the homepage
      if (location.pathname !== '/') return;

      // Improved scroll spy logic
      const sections = [...navLinks].reverse().map(link => link.path);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header-floating hidden md:flex ${isScrolled ? 'scrolled' : ''}`}>
        <RouterLink to="/" className="logo-text">
          ABHINAV
        </RouterLink>

        <nav className="flex items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                scrollToSection(link.path);
                setActiveSection(link.path);
              }}
              className={`nav-link-text ${activeSection === link.path ? 'active' : ''}`}
            >
              {link.name}
            </button>
          ))}
          <RouterLink 
            to="/blog" 
            className={`nav-link-text ${location.pathname === '/blog' ? 'active' : ''}`}
          >
            Blog
          </RouterLink>
        </nav>
      </header>

      {/* Mobile Top Bar */}
      <div className={`fixed top-0 left-0 right-0 h-20 px-6 flex items-center justify-between md:hidden z-50 mobile-header-bar ${isScrolled ? 'scrolled' : 'bg-transparent'}`}>
        <RouterLink to="/" className="logo-text">
          ABHINAV
        </RouterLink>
        <button 
          className="p-2 rounded-xl bg-white/5 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[#030014] p-10 flex flex-col items-center justify-center md:hidden"
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    scrollToSection(link.path);
                    setActiveSection(link.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-bold logo-text ${activeSection === link.path ? 'text-cyan-400' : 'text-white'}`}
                >
                  {link.name}
                </button>
              ))}
              <RouterLink 
                to="/blog" 
                className={`text-2xl font-bold logo-text ${location.pathname === '/blog' ? 'text-cyan-400' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </RouterLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
