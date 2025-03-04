import React from "react";

interface WorkHeaderProps {
  position: string;
  company: string;
  duration: string;
}

const WorkHeader: React.FC<WorkHeaderProps> = ({
  position,
  company,
  duration,
}) => {
  return (
    <>
      <h3 className="text-xl font-sans font-medium text-tertiary-lightest-slate leading-[1.3] mb-3">
        <span>{position}</span>
        <span className="text-secondary-green cursor-pointer">{` @ ${company}`}</span>
      </h3>
      <p className="font-mono text-tertiary-light-slate text-sm mb-5">{duration}</p>
    </>
  );
};

export default WorkHeader;
