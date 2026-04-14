import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Target, Users, Award, Rocket } from 'lucide-react';

const careerSteps = [
  {
    type: "Current Focus",
    title: "Digital Creator & Startup Builder",
    company: "Hyderabad, India",
    period: "2026 - Present",
    description: "Building faceless content systems, AI pipelines, and passive income funnel models via Pinterest and digital stores.",
    icon: <Briefcase className="text-cyan-400" />
  },
  {
    type: "Academic Foundation",
    title: "B.Tech Mechanical Engineering",
    company: "MLRITM College, Hyderabad",
    period: "2024 - 2028",
    description: "Integrating hardware systems with software logic to design sustainable physical products and automated businesses.",
    icon: <Target className="text-purple-400" />
  }
];

import Section from '../ui/Section';

const Career = () => {
  return (
    <Section id="career" title="My Career Journey" className="bg-transparent">
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 hidden sm:block"></div>

        <div className="space-y-12">
          {careerSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:flex-row-reverse md:mr-auto' : 'md:ml-auto'
              }`}
            >
              {/* Dot */}
              <div className="absolute -left-[5px] md:left-auto md:right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] hidden sm:block"></div>
              {index % 2 !== 0 && <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] hidden sm:block"></div>}

              <div className={`glass p-6 md:p-8 rounded-2xl md:rounded-3xl w-full ${
                index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-blue-400">{step.type}</span>
                    <h4 className="text-xs text-zinc-500">{step.period}</h4>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <h4 className="text-zinc-400 font-medium mb-4">{step.company}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Career;
