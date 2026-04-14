import React from 'react';
import { motion } from 'framer-motion';

import Section from '../ui/Section';
import Card from '../ui/Card';

import profilePhoto from '../../assets/images/photo profile.png';

const About = () => {
  return (
    <Section id="about" title="About Me" subtitle="Biography" className="py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-2 max-w-md mx-auto">
            <img
              src={profilePhoto}
              alt="PATTA SVS ABHINAV"
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <h3 className="text-white text-2xl font-bold mb-4">Bridging digital intelligence with physical systems.</h3>
            <p>
              I am a Mechanical Engineering student at <span className="text-white font-medium">MLRITM College, Hyderabad (2024–2028)</span>, dedicated to transforming engineering skills into real-world digital systems and scalable business models.
            </p>
            <p>
              My focus lies at the intersection of Hardware + Software Integration. By combining mechanical principles with Python and design thinking, I explore innovative ways to solve complex problems and build digital income streams.
            </p>
            <p>
              Beyond the classroom, I am a Digital Creator and Startup Builder, experimenting with automation, affiliate funnels, and niche content strategies to design the future of businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <Card className="!p-4" hover={false}>
              <h4 className="text-white font-semibold mb-1">Location</h4>
              <p className="text-zinc-500 text-sm">Hyderabad, Telangana / India</p>
            </Card>
            <Card className="!p-4" hover={false}>
              <h4 className="text-white font-semibold mb-1">Email</h4>
              <p className="text-zinc-500 text-sm">abhinav.patta01@gmail.com</p>
            </Card>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
