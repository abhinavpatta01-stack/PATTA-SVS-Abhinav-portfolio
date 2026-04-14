import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold font-heading gradient-text">
            ABHINAV
          </div>
          
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Abhinav. All rights reserved.
          </div>
          
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-xs text-zinc-600 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
