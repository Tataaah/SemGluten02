import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  children, 
  href,
  className = ''
}) => {
  return (
    <a 
      href={href}
      className={`btn-primary ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default PrimaryButton;