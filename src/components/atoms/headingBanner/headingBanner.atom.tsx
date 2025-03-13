import React from "react";

interface HeadingBannerAtomProps {
  text: string;
}

const HeadingBannerAtom: React.FC<HeadingBannerAtomProps> = ({ text }) => {
  return (
    <div className="flex items-center space-x-4 mt-[10px] mb-10">
      <h2 className="font-semibold text-2xl text-tertiary-lightest-slate">
        {text}
      </h2>
      <div className="h-px w-96 bg-primary-lightest-navy" />
    </div>
  );
};

export default HeadingBannerAtom;
