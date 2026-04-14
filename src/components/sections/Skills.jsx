import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Terminal, Smartphone, Globe } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="text-blue-400" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: <Database className="text-purple-400" />,
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase"]
  },
  {
    category: "Mobile & AI",
    icon: <Smartphone className="text-pink-400" />,
    items: ["React Native", "Flutter", "OpenAI API", "Hugging Face"]
  },
  {
    category: "Tools & DevOps",
    icon: <Terminal className="text-emerald-400" />,
    items: ["Git", "Docker", "AWS", "CI/CD", "Vercel"]
  }
];

import Section from '../ui/Section';
import Card from '../ui/Card';

const Skills = () => {
  return (
    <Section id="skills" title="My Skills" subtitle="Expertise" className="bg-zinc-950/50">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <Card key={skill.category} delay={index * 0.1} className="p-8 hover:border-blue-500/30 group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li key={item} className="text-zinc-500 flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
