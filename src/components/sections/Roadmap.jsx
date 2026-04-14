import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Globe, Briefcase } from 'lucide-react';
import Section from '../ui/Section';

const roadmapItems = [
  {
    year: "2026+",
    title: "Founder / Tech Entrepreneur",
    goals: [
      "Build sustainable packaging alternative (plastic replacement)",
      "Launch premium recycled product brand (luxury segment)",
      "Integrate AI + digital systems into physical businesses",
      "Scale into a multi-venture company (Genova vision)"
    ],
    icon: <Rocket className="text-cyan-400" />
  }
];

const Roadmap = () => {
  return (
    <Section id="roadmap" title="Future Roadmap" subtitle="Vision">
      <div className="max-w-4xl mx-auto">
        {roadmapItems.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="futuristic-card p-6 md:p-10 rounded-3xl md:rounded-[3rem] border border-cyan-400/30 relative overflow-hidden group"
          >
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px] group-hover:bg-cyan-400/20 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div>
                  <span className="text-cyan-400 font-bold tracking-[0.2em]">{item.year}</span>
                  <h3 className="text-3xl font-black text-white">{item.title}</h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {item.goals.map((goal, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-all">
                    <div className="mt-1">
                      <Sparkles size={18} className="text-cyan-400" />
                    </div>
                    <p className="text-zinc-300 font-medium">{goal}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-4 text-zinc-500 italic">
                <Globe size={18} />
                <p>Establishing digital-physical convergence in the global market.</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Roadmap;
