import HeadingBannerAtom from "@/components/atoms/headingBanner/headingBanner.atom";
import { images } from "@/lib/assets/images";
import React from "react";
import RightOrientationProjectCard from "@/components/molecules/DetailedProjectCard/rightOrientationProjectCard.molecule";
import LeftOrientationProjectCard from "@/components/molecules/DetailedProjectCard/leftOrientationProjectCard.molecule";

const ProjectsWorkedOnOrganism = () => {
  const project = {
    title: "ValletPay",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    externalLink: "#",
    github: "#",
    tools: ["Next.js", "Bootstrap", "Framer motion"],
  };
  return (
    <div className="w-full">
      <HeadingBannerAtom text="Featured Projects I worked On" />

      <div className="w-full flex flex-col gap-[180px]">
        <RightOrientationProjectCard
          image={images.nkwaImage}
          title={project.title}
          description={project.description}
          tools={["Next.js", "Tailwind CSS", "Redux Toolkit", "TypeScript"]}
          // github={project.github}
          externalLink={project.externalLink}
        />
        <LeftOrientationProjectCard
          image={images.digitalRenter}
          title={"Digital Renter App"}
          description={project.description}
          tools={["React Native", "Expo", "Laravel"]}
          // github={project.github}
          externalLink={project.externalLink}
        />
        <RightOrientationProjectCard
          image={images.nkwaImage}
          title={"MyNkwa"}
          description={project.description}
          tools={project.tools}
          // github={project.github}
          externalLink={project.externalLink}
        />
        <LeftOrientationProjectCard
          image={images.nkwaImage}
          title={"Visioseo"}
          description={
            "I worked on this Saas which creates AI-powered, search engine-optimized landing pages that maximize visibility. UX-optimized pages ensure high usability and an improved user experience."
          }
          tools={["Next.js", "Tailwind CSS", "TypeScript"]}
          // github={project.github}
          externalLink={project.externalLink}
        />
      </div>
    </div>
  );
};

export default ProjectsWorkedOnOrganism;
