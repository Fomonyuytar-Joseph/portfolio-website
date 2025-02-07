import HeadingBannerAtom from "@/components/atoms/headingBanner/headingBanner.atom";
import React from "react";

const AboutMeSectionOrganism = () => {
  return (
    <div>
      <HeadingBannerAtom text="About Me" />
      <div className="text-tertiary-slate text-xl font-sans max-w-[600px] font-normal">
        <p className="mb-[15px]">
          Hello! My name is Brittany, and I’m passionate about crafting seamless
          digital experiences on the web. My journey in web development started
          with curiosity and a desire to build, leading me to specialize in
          frontend development.
        </p>
        <p className="mb-[15px]">
          Over the years, I’ve worked on a variety of projects, from building
          scalable UI components to enhancing accessibility and performance in
          modern web applications. My experience spans across{" "}
          <span className="text-secondary-green cursor-pointer">
            startups, enterprise applications, and open-source contributions
          </span>
          . Currently, I focus on building robust, user-friendly applications
          with React.js , Next.js, TypeScript, and Tailwind CSS.
        </p>
        <p className="mb-[15px] ">
          Additionally, I have a strong passion for reading books and writing
          articles, using both as tools to explore ideas, share knowledge, and
          inspire others
        </p>
      </div>
    </div>
  );
};

export default AboutMeSectionOrganism;
