"use client";
import Button from "@/components/atoms/button/button.atom";
import HeadingBannerAtom from "@/components/atoms/headingBanner/headingBanner.atom";
import React from "react";

const ContactMeOrganism = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:josephneymar33@gmail.com`;
  };
  return (
    <div className="">
      <HeadingBannerAtom text="Contact Me" />
      <p className="text-tertiary-slate text-xl mb-[50px] text-center">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <div className="flex items-center justify-center">
        <Button text="Say Hello" onClick={handleEmailClick} />
      </div>
    </div>
  );
};

export default ContactMeOrganism;
