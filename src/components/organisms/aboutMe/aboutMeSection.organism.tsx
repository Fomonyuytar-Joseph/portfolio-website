import HeadingBannerAtom from "@/components/atoms/headingBanner/headingBanner.atom";
import { images } from "@/lib/assets/images";
import Image from "next/image";
import React from "react";

const AboutMeSectionOrganism = () => {
  return (
    <div>
      <HeadingBannerAtom text="About Me" />
      <div className="w-full flex flex-col lg:flex-row gap-12 ">
        <div className="text-tertiary-slate text-xl font-sans max-w-[600px] font-normal">
          <p className="mb-[15px]">
            Hello! My name is Fomonyuytar Joseph, and I’m passionate about
            crafting seamless digital experiences on the web. My journey in web
            development started with curiosity and a desire to build, leading me
            to specialize in frontend development.
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

        <div className="max-lg:flex max-lg:justify-center max-lg:items-center">
          <div className="relative group w-64 h-64">
            {/* Inner border behind image */}
            <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-secondary-green  group-hover:opacity-100  transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            {/* Image Wrapper */}
            <div className="relative w-64 h-64 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
              {/* Original Image */}
              <Image
                src={images.joseph}
                alt="Profile"
                objectFit="cover"
                className="transition duration-300 "
              />

              {/* Green Overlay */}
              <div className="absolute inset-0 bg-secondary-green mix-blend-multiply transition-opacity duration-300 opacity-100 group-hover:opacity-0 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSectionOrganism;
