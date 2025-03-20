import React from 'react';

interface IconButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const IconButton = ({ onClick, children, className = '' }: IconButtonProps) => {
  return (
    <button
      className={`rounded-full hover:bg-gray-100 transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
