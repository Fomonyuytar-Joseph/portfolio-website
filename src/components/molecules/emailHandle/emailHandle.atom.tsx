import Link from "next/link";
import React from "react";

const EmailHandle = () => {
  return (
    <div className="hidden fixed bottom-0 right-[-32px] lg:flex flex-col items-center space-y-6 text-white">
      <Link
        href="https://www.linkedin.com/in/fomonyuytar-joseph"
        className="hover:text-secondary-green rotate-90 mb-[85px] font-fira text-xs tracking-widest text-tertiary-lightest-slate"
      >
        josephneymar33@gmail.com
      </Link>

      <div className="w-px h-24 bg-tertiary-light-slate" />
    </div>
  );
};

export default EmailHandle;
