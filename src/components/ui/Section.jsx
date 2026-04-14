import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = '', containerClassName = '' }) => {
  return (
    <section id={id} className={`py-20 relative overflow-hidden ${className}`}>
      <div className={`container relative z-10 ${containerClassName}`}>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-2 block"
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold"
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
