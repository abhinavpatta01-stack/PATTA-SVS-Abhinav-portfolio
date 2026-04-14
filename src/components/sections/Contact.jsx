import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/abhinavpatta01", label: "Github" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/abhinav", label: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "https://twitter.com/abhinav", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]"></div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-left mb-6">
              <span className="text-cyan-400">CONNECT</span>
              Get in Touch
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-md">
              Have a project in mind or just want to chat? My inbox is always open. Let's build something amazing together.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 futuristic-card group-hover:neon-border-blue transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-1">Email Me</h4>
                  <p className="text-white text-xl font-heading font-semibold">abhinav.patta01@gmail.com</p>
                </div>
              </div>

              <div className="pt-10">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-8">Social Ecosystem</h4>
                <div className="flex gap-6">
                  {socialLinks.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white futuristic-card hover:neon-border-purple"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="futuristic-card contact-card p-8 md:p-12 rounded-[3rem] neon-border-blue relative"
          >
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                  <p className="text-zinc-400">I'll get back to you faster than light.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Your Identity</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Name"
                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:neon-border-blue transition-all outline-none text-white font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Signal Protocol</label>
                      <input 
                        required
                        type="email" 
                        placeholder="Email"
                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:neon-border-blue transition-all outline-none text-white font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Objective</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Subject"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:neon-border-blue transition-all outline-none text-white font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">The Message</label>
                    <textarea 
                      required
                      rows="4"
                      placeholder="Input your transmission..."
                      className="w-full bg-white/5 border border-white/5 rounded-3xl px-6 py-4 focus:neon-border-blue transition-all outline-none text-white resize-none font-medium"
                    ></textarea>
                  </div>
                  <button 
                    disabled={formStatus === 'sending'}
                    className="w-full py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,210,255,0.3)] disabled:opacity-50"
                  >
                    {formStatus === 'sending' ? 'Transmitting...' : 'Send Message'}
                    <Send size={20} className={formStatus === 'sending' ? 'animate-pulse' : ''} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
