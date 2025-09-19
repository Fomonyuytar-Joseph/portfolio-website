import React from "react";
import Image, { StaticImageData } from "next/image";
import ProjectInfo from "../projectInfo/projectInfo.molecule";

interface LeftOrientationProjectCardProps {
  title: string;
  description: string;
  github?: string;
  externalLink?: string;
  tools: string[];
  image: StaticImageData;
}

const LeftOrientationProjectCard: React.FC<LeftOrientationProjectCardProps> = ({
    title,
  description,
  github,
  externalLink,
  tools,
  image,
}) => {
  return (
    <div className="relative w-full ">
      <div className="absolute z-[99] 2xl:left-[-150px] ">
        <ProjectInfo
          title={title}
          description={description}
          externalLink={externalLink}
          github={github}
          tools={tools}
          orientation="start"
        />
      </div>
      <div className="w-full flex items-end justify-end ">
        {/* Image Wrapper */}
        <div className="relative w-[520px]  overflow-hidden transition-transform duration-300 ">
          {/* Original Image */}
          <Image
            src={image}
            alt={image.src}
            objectFit="cover"
            className="transition duration-300 "
          />

          {/* Green Overlay */}
          <div className="absolute inset-0"></div>
        </div>
      </div>
    </div>
  );
};

export default LeftOrientationProjectCard;
