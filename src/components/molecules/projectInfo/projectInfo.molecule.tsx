import { IconRepository } from "@/lib/repository/icons/icon.repository";
import Link from "next/link";
import React from "react";

export interface ProjectInfoProps {
  title: string;
  description: string;
  github?: string;
  externalLink?: string;
  tools: string[];
  orientation?: "start" | "end";
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  title,
  description,
  github,
  externalLink,
  tools,
  orientation = "end",
}) => {
  return (
    <div>
      <p
        className={`text-secondary-green font-fira text-[13px] font-normal mb-2  ${
          orientation === "end" ? "text-right" : "text-left"
        }`}
      >
        Featured Project
      </p>
      <h3
        className={`text-tertiary-lightest-slate font-semibold text-[28px] leading-[1.1] mb-5  ${
          orientation === "end" ? "text-right" : "text-left"
        }`}
      >
        {title}
      </h3>

      <div
        className="w-[450px] p-6 rounded bg-primary-light-navy text-tertiary-light-slate text-lg mb-6"
        style={{ boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.7)" }}
      >
        <p className="text-tertiary-light-slate text-[14px] font-normal ">
          {description}
        </p>
      </div>

      <div
        className={`w-full flex flex-col items-${orientation} flex-${orientation} justify-${orientation}`}
      >
        <div
          className={`flex items-${orientation} justify-${orientation} gap-5 mt-6 w-full mb-[10px] `}
        >
          {tools.map((tool, index) => (
            <div
              key={index}
              className="text-tertiary-light-slate font-fira font-normal text-[13px] text-nowrap"
            >
              {tool}
            </div>
          ))}
        </div>

        <div
          className={`flex items-${orientation} gap-4 text-tertiary-light-slate mt-2`}
        >
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

export default ProjectInfo;
