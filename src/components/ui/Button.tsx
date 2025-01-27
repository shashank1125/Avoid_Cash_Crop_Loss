import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, variant = 'primary', className = '', onClick }: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2';
  const variants = {
    primary: 'bg-green-600 hover:bg-green-700 text-white transform hover:scale-105',
    secondary: 'bg-white hover:bg-gray-50 text-green-700 border-2 border-green-600 transform hover:scale-105'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;