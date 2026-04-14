import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Award, Zap } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const achievements = [
  {
    title: "Leadership & Strategy",
    items: [
      { text: "Led teams in Smart India Hackathon", icon: <Zap size={16} /> },
      { text: "Class Representative (CR) – coordination & leadership", icon: <Users size={16} /> },
      { text: "Gaming Team Leader – team building & execution", icon: <Trophy size={16} /> }
    ]
  },
  {
    title: "Honors & Activities",
    items: [
      { text: "State-level Drawing Winner", icon: <Award size={16} /> },
      { text: "Marathon participation & sports achievements", icon: <Users size={16} /> },
      { text: "Active in Engineering Innovation Forums", icon: <Award size={16} /> }
    ]
  }
];

const Achievements = () => {
  return (
    <Section id="achievements" title="Leadership & Achievements" subtitle="Milestones">
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((group, gIndex) => (
          <div key={group.title} className="space-y-6">
            <h3 className="text-xl font-bold text-white pl-4 border-l-2 border-cyan-400">
              {group.title}
            </h3>
            <div className="space-y-4">
              {group.items.map((item, iIndex) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: (gIndex * 3 + iIndex) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="!p-6 group hover:neon-border-blue" hover={true}>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                        {item.icon}
                      </div>
                      <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">{item.text}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
