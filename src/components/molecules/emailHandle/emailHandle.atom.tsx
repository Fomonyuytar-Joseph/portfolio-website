import Link from "next/link";
import React from "react";

const EmailHandle = () => {
  return (
    <div className="fixed bottom-0 right-[72px] flex flex-col items-center space-y-6 text-white">
      <Link
        href="https://www.linkedin.com/in/fomonyuytar-joseph"
        className="hover:text-secondary-green"
      >
        josephneymar33@gmail.com
      </Link>

      <div className="w-px h-24 bg-tertiary-light-slate" />
    </div>
  );
};

export default EmailHandle;
