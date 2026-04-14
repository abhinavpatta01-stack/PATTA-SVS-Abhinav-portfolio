import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = '', containerClassName = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 relative overflow-hidden ${className}`}>
      <div className={`container relative z-10 ${containerClassName}`}>
        {title && (
          <div className="mb-12 text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-heading"
            >
              {title}
            </motion.h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
