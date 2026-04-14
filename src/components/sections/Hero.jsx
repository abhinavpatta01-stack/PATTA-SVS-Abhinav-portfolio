import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Zap } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  const tags = ["AI Systems", "Content Monetization", "Startup Builder", "Mechanical + Digital Integration"];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-[140px]">
      <div className="container relative z-10 max-w-[1000px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-name w-full block">
              PATTA SVS ABHINAV
            </span>
            
            <h1 className="hero-title mb-10">
              Building Digital Systems & <br />
              <span className="text-cyan-400">Future-Ready Startups</span>
            </h1>
            
            <p className="hero-subtext mb-12 max-w-2xl mx-auto">
              Engineering + AI + Content + Business — turning ideas into <span className="text-white font-semibold">scalable systems</span>.
            </p>
          </motion.div>

          {/* Premium Tag Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            {tags.map(tag => (
              <span key={tag} className="tag-item">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* High-Converting CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <button 
              className="primary-btn-glow" 
              onClick={() => scrollToSection('projects')}
            >
              Explore Systems <ArrowRight size={20} className="ml-2" />
            </button>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-zinc-500 hover:text-cyan-400 transition-colors font-medium tracking-widest text-xs uppercase"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </motion.button>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
