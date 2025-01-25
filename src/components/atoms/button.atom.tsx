import React from 'react'


interface ButtonProps {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({className}) => {
  return (
    <button className={`px-3 py-2 text-secondary-green border border-secondary-green rounded-md ${className} `}>
      Resume
    </button>
  );
}

export default Button