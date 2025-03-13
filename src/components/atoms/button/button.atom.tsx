import React from "react";

interface ButtonProps {
  className?: string;
  text?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, text ,onClick }) => {
  return (
    <button
      className={`px-3 py-2 text-secondary-green border border-secondary-green rounded-md ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
