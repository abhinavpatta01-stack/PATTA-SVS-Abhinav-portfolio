import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Target } from 'lucide-react';

const careerSteps = [
  {
    type: "Current Role",
    title: "Senior Full Stack Engineer",
    company: "TechNexus Solutions",
    period: "2023 - Present",
    description: "Leading a team of developers to build scalable enterprise solutions and mentoring junior engineers.",
    icon: <Briefcase className="text-blue-400" />
  },
  {
    type: "Learning Journey",
    title: "Advanced AI Specialization",
    company: "Stanford Online",
    period: "2024",
    description: "Deep diving into Large Language Models, Generative AI, and neural network architectures.",
    icon: <GraduationCap className="text-purple-400" />
  },
  {
    type: "Future Goal",
    title: "CTO / Technical Founder",
    company: "Future Venture",
    period: "2026",
    description: "Building a tech startup focused on solving climate change through blockchain and AI integration.",
    icon: <Target className="text-pink-400" />
  }
];

const Career = () => {
  return (
    <section id="career" className="py-20 bg-zinc-950/50">
      <div className="container">
        <h2 className="section-title">
          <span>Path</span>
          My Career Journey
        </h2>

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

                <div className={`glass p-8 rounded-3xl w-full sm:w-[90%] ${
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
      </div>
    </section>
  );
};

export default Career;
