import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-2">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600" 
                alt="About" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-2xl hidden md:block">
              <span className="text-4xl font-bold gradient-text">3+</span>
              <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Years of<br />Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-left">
              <span>Biography</span>
              About Me
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                I am a passionate and driven individual who enjoys building meaningful digital experiences. I have a strong interest in technology, design, and problem-solving, and I continuously strive to improve my skills and stay updated with modern trends.
              </p>
              <p>
                I enjoy working on projects that challenge me and help me grow both technically and creatively. Whether it’s developing user-friendly interfaces or exploring new tools and frameworks, I am always eager to learn and innovate.
              </p>
              <p>
                Currently, I am focused on expanding my expertise, working on impactful projects, and shaping my career in a way that allows me to create value and make a difference.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="glass p-4 rounded-xl">
                <h4 className="text-white font-semibold mb-1">Location</h4>
                <p className="text-zinc-500 text-sm">Remote / India</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <p className="text-zinc-500 text-sm">abhinav@example.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
