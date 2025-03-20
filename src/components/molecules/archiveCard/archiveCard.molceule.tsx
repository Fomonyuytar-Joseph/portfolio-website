import { IconRepository } from "@/lib/repository/icons/icon.repository";
import Link from "next/link";
import React from "react";

export interface ArchiveCardProps {
  github?: string;
  externalLink?: string;
  title: string;
  description: string;
  tools: string[];
}

const ArchiveCard: React.FC<ArchiveCardProps> = ({
  github,
  externalLink,
  title,
  description,
  tools,
}) => {
  return (
    <div
      className="w-full flex flex-col items-start justify-between  bg-primary-light-navy rounded transition-transform duration-300 max-xl:hover:-translate-x-5 xl:hover:-translate-y-3 cursor-pointer"
      style={{
        boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
        padding: "2rem 1.75rem",
      }}
    >
      <div>
        <div className="w-full flex items-start justify-between text-secondary-green">
          <IconRepository.FolderIcon />

          <div className="flex items-start gap-4 text-tertiary-light-slate ">
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

        <div className="flex flex-col gap-4 mt-3">
          <h3 className="text-tertiary-lightest-slate text-[22px] font-semibold font-sans">
            {title}
          </h3>
          <p className="text-tertiary-lightest-slate text-[15px] font-fira ">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5 mt-6 w-full">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="text-tertiary-slate font-mono text-[12px]"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchiveCard;
