import React from 'react';

const Badge = ({ children, className = '', variant = 'primary' }) => {
  const variants = {
    primary: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    secondary: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    outline: 'border border-white/10 text-zinc-400',
  };

  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
