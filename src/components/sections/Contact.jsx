import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-left">
              <span>Connect</span>
              Get in Touch
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-md">
              Have a project in mind or just want to chat? My inbox is always open. Let's build something amazing together.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Email Me</h4>
                  <p className="text-white text-lg">abhinav@example.com</p>
                </div>
              </div>

              <div className="pt-10">
                <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">Socials</h4>
                <div className="flex gap-4">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-1"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form className="glass p-8 md:p-10 rounded-3xl space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 transition-colors outline-none text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 transition-colors outline-none text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 transition-colors outline-none text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 focus:border-blue-500 transition-colors outline-none text-white resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-blue-500/20">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
