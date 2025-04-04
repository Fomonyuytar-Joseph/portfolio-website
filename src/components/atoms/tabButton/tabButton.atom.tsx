import React from "react";

interface TabButtonProps {
  active: boolean;
  label:string
  onClick?:()=>void
}

const TabButton: React.FC<TabButtonProps> = ({ active ,label ,onClick}) => {
  return (
    <div
      className={`p-4 transition duration-300  hover:bg-secondary-green-tint font-mono text-sm border-l-2   ${
        active
          ? "text-secondary-green border-secondary-green"
          : "text-tertiary-slate border-primary-lightest-navy"
      }`}
      onClick={onClick}
    >
      <button className="border-none  rounded-none bg-transparent   text-left text-nowrap">
        {label}
      </button>
    </div>
  );
};

export default TabButton;
