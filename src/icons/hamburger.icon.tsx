import { IconType } from '@/types/icon.type';
import React from 'react';

const HamburgerIcon: React.FC<IconType> = ({ className, onClick }) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="#64ffda" />
    </svg>
  );
};

export default HamburgerIcon;
