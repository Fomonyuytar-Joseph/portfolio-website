import React from "react";

interface BurgerMenuIconProps {
  onClick?: () => void;
  className?: string;
}

const BurgerMenuIcon: React.FC<BurgerMenuIconProps> = ({
  onClick,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      width={24}
      height={24}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M4 18L20 18"
          stroke="#64ffda"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M4 12L20 12"
          stroke="#64ffda"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M4 6L20 6"
          stroke="#64ffda"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>{" "}
      </g>
      <title>Hamburger Menu</title>
    </svg>
  );
};

export default BurgerMenuIcon;
