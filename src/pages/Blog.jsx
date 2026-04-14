import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2026",
    excerpt: "Exploring how AI and edge computing are reshaping the way we build and deploy web applications.",
    date: "April 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
  },
  {
    id: 2,
    title: "Mastering Framer Motion for Premium UI",
    excerpt: "A deep dive into creating smooth, performant animations that wow your users without affecting load times.",
    date: "April 05, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800"
  },
  {
    id: 3,
    title: "Why Minimalist Design is Still King",
    excerpt: "Understanding the psychological impact of whitespace and clean typography in modern digital products.",
    date: "March 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800"
  }
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
        
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6"
          >
            Insights & <span className="gradient-text">Articles</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl"
          >
            Thoughts on technology, design, and the future of the web.
          </motion.p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="group glass rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 line-clamp-2 hover:text-blue-400 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-zinc-500 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-sm font-semibold flex items-center gap-2 group/btn">
                  Read Article <div className="w-8 h-[1px] bg-zinc-700 group-hover/btn:w-12 group-hover/btn:bg-blue-500 transition-all"></div>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
