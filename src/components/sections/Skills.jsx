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

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-zinc-950/50">
      <div className="container">
        <h2 className="section-title">
          <span>Expertise</span>
          My Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl hover:border-blue-500/30 transition-all group"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
