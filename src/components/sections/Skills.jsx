import React from 'react';
import { motion } from 'framer-motion';
import { Cog, Palette, TrendingUp, Rocket, CheckCircle2 } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const skillCategories = [
  {
    title: "Technical Systems",
    icon: <Cog size={28} />,
    emphasis: "Core Focus: Mechanical + Digital",
    skills: [
      "Mechanical Engineering Fundamentals",
      "Hardware–Software Integration Thinking",
      "Python (Basics + Problem Solving)",
      "Programming Logic & Fundamentals",
      "System Design & Structured Thinking",
      "Analytical Problem Solving"
    ]
  },
  {
    title: "Creative & Content",
    icon: <Palette size={28} />,
    emphasis: "Visual & Digital Assets",
    skills: [
      "Graphic Design (Posters & Social)",
      "Video Editing (Short-form Content)",
      "Visual Rendering & Digital Art",
      "Faceless Content Strategy",
      "Canva & Design Tools",
      "AI Creative Pipelines"
    ]
  },
  {
    title: "Digital Business",
    icon: <TrendingUp size={28} />,
    emphasis: "Monetization & Systems",
    skills: [
      "Affiliate Marketing (Amazon-based)",
      "Pinterest Marketing Systems",
      "Content Monetization Funnels",
      "Digital Product Research",
      "Market & Trend Analysis",
      "Passive Income Funnels"
    ]
  },
  {
    title: "Startup & Execution",
    icon: <Rocket size={28} />,
    emphasis: "Build & Scale Strategy",
    skills: [
      "Startup Ideation & Product Thinking",
      "Business Model Planning",
      "Market Research & Validation",
      "Execution Strategy",
      "System Building & Scaling",
      "Multi-venture Frameworks"
    ]
  }
];

const Skills = () => {
  return (
    <Section 
      id="skills" 
      title="Skills & Capabilities" 
      subtitle="A hybrid skillset combining engineering, digital systems, and business execution"
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="!p-6 md:!p-8 h-full project-card group" hover={true}>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading tracking-tight group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] font-accent">
                      {category.emphasis}
                    </p>
                  </div>
                </div>
                
                <ul className="grid grid-cols-1 gap-y-3 mt-auto">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-400 text-sm group/item">
                      <CheckCircle2 size={14} className="text-cyan-400/50 group-hover/item:text-cyan-400 transition-colors" />
                      <span className="group-hover/item:text-zinc-200 transition-colors font-main">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-24 p-12 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/5 border border-cyan-400/20 text-center max-w-4xl mx-auto relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[80px]"></div>
        <div className="relative z-10">
          <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed font-main">
            “I combine <span className="text-cyan-400 font-bold">Mechanical Engineering</span>, digital intelligence, and business strategy to design systems that can scale, solve real problems, and generate value.”
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;
