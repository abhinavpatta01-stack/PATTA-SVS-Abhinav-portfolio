import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Novelleyx Guard",
    description: "Smart safety & alert system focused on real-world problem solving and automation. An innovative approach to emergency technology.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800",
    tags: ["Safety Tech", "Automation", "Innovation"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Novelleyx Media",
    description: "Faceless content creation system using AI visual pipelines. Built for mass scale, rapid growth, and high audience retention.",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800",
    tags: ["AI Media", "Short-form", "Scalable"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Affiliate System (Amazon)",
    description: "High-traffic Pinterest engine driving high-conversion affiliate sales. Testing hook psychology and automated funnel strategy.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
    tags: ["Passive Income", "Pinterest SEO", "Amazon"],
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "Website Systems",
    description: "Structured web platforms built for project conversion and clean UI, used as foundations for startup and funnel experiments.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    tags: ["UI Systems", "Conversion", "Web Dev"],
    github: "#",
    live: "#"
  },
  {
    id: 5,
    title: "Digital Store",
    description: "Multi-channel monetization channel for digital and recycled products. Strategic product research and listing optimization.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800",
    tags: ["E-commerce", "Recycled Products", "Strategy"],
    github: "#",
    live: "#"
  }
];

import Section from '../ui/Section';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="project-card group" hover={true}>
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                {/* Visual indicator of project details, no redirection to new page */}
                <div className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white">
                  <span className="text-xs font-bold uppercase tracking-widest">System Preview</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors font-heading">
              {project.title}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-main">
              {project.description}
            </p>
          </Card>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-20 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 text-center max-w-4xl mx-auto"
      >
        <p className="text-xl md:text-2xl text-zinc-300 font-medium italic">
          “I design systems, not just projects — each one built to scale, monetize, or solve real problems.”
        </p>
      </motion.div>
    </Section>
  );
};

export default Projects;
