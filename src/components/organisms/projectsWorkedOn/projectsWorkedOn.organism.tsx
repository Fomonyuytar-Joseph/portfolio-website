import HeadingBannerAtom from "@/components/atoms/headingBanner/headingBanner.atom";
import { images } from "@/lib/assets/images";
import React from "react";
import RightOrientationProjectCard from "@/components/molecules/DetailedProjectCard/rightOrientationProjectCard.molecule";
import LeftOrientationProjectCard from "@/components/molecules/DetailedProjectCard/leftOrientationProjectCard.molecule";
import ProjectCard from "@/components/molecules/ProjectCard/projectCard.molecule";
import { ProjectsWorkedOnData } from "@/lib/utils/constants.utils";

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

      <div className="w-full hidden lg:flex flex-col gap-[180px] ">
        <RightOrientationProjectCard
          image={images.valletPayImage}
          title={"ValletPay"}
          description={
            "A fintech solution redefining financial transactions between Europe and Africa. ValletPay enables individuals to send money to loved ones and businesses to make bulk payments with ease."
          }
          tools={["Next.js", "Tailwind CSS", "Redux Toolkit", "TypeScript"]}
          // github={project.github}
          externalLink={"https://www.linkedin.com/company/valletpay/"}
        />
        <LeftOrientationProjectCard
          image={images.digitalRenter}
          title={"Digital Renter App"}
          description={
            "A real estate platform simplifying house hunting in Cameroon’s busy cities.It connects property seekers with agents, agencies, and landlords"
          }
          tools={["React Native", "Expo", "Laravel"]}
          // github={project.github}
          externalLink={
            "https://play.google.com/store/apps/details?id=com.digitalrenter&hl=en"
          }
        />
        <RightOrientationProjectCard
          image={images.nkwaImage}
          title={"Nkwa Website"}
          description={
            "A fintech platform designed to help individuals build consistent savings habits. SmartSave offers goal-based saving plans, automated deposits, and personalized insights to make saving effortless, secure, and rewarding."
          }
          tools={project.tools}
          // github={project.github}
          externalLink={"https://mynkwa.com/en"}
        />
        <LeftOrientationProjectCard
          image={images.visioseoImage}
          title={"Visioseo"}
          description={
            "A scalable SEO platform that boosts local and nationwide visibility on Google, driving qualified leads and sustainable business growth."
          }
          tools={["Next.js", "Tailwind CSS", "TypeScript"]}
          // github={project.github}
          externalLink={"https://www.visioseo.io/"}
        />
      </div>
      <div className="flex flex-col gap-5 lg:hidden ">
        {ProjectsWorkedOnData.map((project, index) => (
          <ProjectCard
            image={project.image}
            title={project.title}
            description={project.description}
            tools={project.tools}
            externalLink={project.externalLink}
            github={project.github}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsWorkedOnOrganism;
