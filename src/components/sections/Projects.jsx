import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Nova Dashboard",
    description: "A futuristic analytics dashboard with real-time data visualization and AI insights.",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a1ef4a?q=80&w=800",
    tags: ["React", "D3.js", "Firebase"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "EcoSphere Mobile",
    description: "Eco-tracking application for monitoring individual carbon footprint with social features.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Cipher Vault",
    description: "Next-gen password manager using zero-knowledge architecture and biometric auth.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
    tags: ["Next.js", "Web Crypto API", "Redis"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="flex justify-between items-end mb-12">
          <h2 className="section-title text-left mb-0">
            <span>Portfolio</span>
            Selected Projects
          </h2>
          <Link to="/projects" className="text-zinc-400 hover:text-white flex items-center gap-1 group">
            View All <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden glass mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-3">
                    <a href={project.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-all">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-all">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest text-zinc-500 border border-zinc-800 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-500 text-sm line-clamp-2">
                {project.description}
              </p>
              
              <Link 
                to={`/project/${project.id}`}
                className="absolute inset-0 z-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
