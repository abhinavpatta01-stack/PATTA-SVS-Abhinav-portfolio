import React from 'react';

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const variants = {
    primary: 'bg-white text-black hover:scale-105',
    outline: 'border border-white/20 text-white hover:bg-white/10',
    glass: 'glass text-white hover:bg-white/10',
    ghost: 'text-zinc-400 hover:text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
