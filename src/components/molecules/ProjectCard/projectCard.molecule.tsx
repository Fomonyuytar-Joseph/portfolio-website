import { IconRepository } from "@/lib/repository/icons/icon.repository";
import Link from "next/link";
import React from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  github?: string;
  externalLink?: string;
  tools: string[];
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  github,
  externalLink,
  tools,
  image,
}) => {
  return (
    <div className="relative w-full p-9 group">
      {/* Background with blur and overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/${image}')` }}
      ></div>
      <div className="absolute inset-0 bg-primary-light-navy/90"></div>

      {/* Content (ensures text is not blurred) */}
      <div className="relative z-10">
        <p className="text-secondary-green font-fira text-[13px] font-normal mb-2 text-start">
          Featured Project
        </p>
        <h3 className="text-tertiary-lightest-slate font-semibold text-[28px] leading-[1.1] mb-5 text-start">
          {title}
        </h3>
        <p className="text-tertiary-light-slate text-[14px] font-normal mb-6">
          {description}
        </p>
        <div className="flex items-start gap-5 mt-6 w-full mb-[10px]">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="text-tertiary-light-slate font-fira font-normal text-[13px] text-nowrap"
            >
              {tool}
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-start gap-4 text-tertiary-light-slate mt-2">
          {github && (
            <Link href={github} className="hover:text-secondary-green">
              <IconRepository.GithubOutlineIcon />
            </Link>
          )}
          {externalLink && (
            <Link href={externalLink} className="hover:text-secondary-green">
              <IconRepository.ExternalLinkIcon />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
