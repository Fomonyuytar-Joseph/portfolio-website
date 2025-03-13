import ArchiveCard from "@/components/molecules/archiveCard/archiveCard.molceule";
import { FeaturedArchivedProjects } from "@/lib/utils/constants.utils";
import Link from "next/link";
import React from "react";

const NoteWorthyProjectsOrganism = () => {
  return (
    <div className="w-full">
      <div className="text-center">
        <h2 className="text-tertiary-lightest-slate text-[32px] mb-2.5 font-semibold ">
          Other Noteworthy Projects
        </h2>
        <Link
          href={"#"}
          className="font-mono text-[14px] text-secondary-green "
        >
          view the archive
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-1 xl:grid-cols-3 mt-[50px] w-full">
        {FeaturedArchivedProjects.map((project, index) => (
          <ArchiveCard
            title={project.title}
            description={project.description}
            github={project.github}
            externalLink={project.externalLink}
            tools={project.tools}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteWorthyProjectsOrganism;
